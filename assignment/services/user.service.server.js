var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var bcrypt = require('bcrypt-nodejs');

module.exports = function (app) {

    //HTTP methods for users below
    app.post("/api/user", createUser);
    app.get("/api/username", findUserByUsername);
    app.get("/api/user", findUserByCredentials);
    app.get('/api/user/:uid', findUserById)
    app.put("/api/user/:uid", updateUser);
    app.delete("/api/user/:uid", deleteUser);

    var userModel = require('../model/user/user.model.server');

    //OAuth
    app.post('/api/login', passport.authenticate('local'), login);
    app.post('/api/logout', logout);
    app.post('/api/register', register);
    app.post('/api/loggedIn', loggedIn);

    app.get('/facebook/login', passport.authenticate('facebook', {scope: 'email'}));
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            failureRedirect: '/#/login',
           // successRedirect: '/#/profile'

       // }));
        }), function(req, res) {
        res.redirect('#profile' + req.user._id);
        });

    var facebookConfig = {
    clientID: process.env.FACEBOOK_CLIENT_ID || '1993555897607210',
    //    clientID:    '1993555897607210',
    clientSecret: process.env.FACEBOOK_SECRET_ID || 'f3e6e95dcac8c960f3ba7b08401abece',
    //    clientSecret: 'f3e6e95dcac8c960f3ba7b08401abece',
    // callbackURL: 'http://localhost:3200/auth/facebook/callback'
    callbackURL: process.env.FACEBOOK_CALLBACK || 'http://localhost:3200/auth/facebook/callback'
        };

    passport.use(new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);
    passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

    function facebookStrategy(token, refreshToken, profile, done){
        userModel.findFBUser(profile.id)
            .then(
                function(user) {
                    if(user) {
                        return done(null, user);
                    } else {
                        var names = profile.displayName.split(" ");
                        var newFacebookUser = {
                            lastName: names[1],
                            firstName: names[0],
                            email: profile.emails ? profile.emails[0].value:"",
                            facebook: { id: profile.id, token: token } };
                        return userModel.createUser(newFacebookUser);
                    }
                }, function(err) {
                    if (err) {
                        return done(err);
                    } } );
    }

    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        userModel.findUserById(user._id).then(
            function(user){
                done(null, user);
            },
            function(err){
                done(err, null);
            }
        );
    }

    function login(req, res) {
        var user = req.user;
        res.json(user);
    }

    function logout(req, res) {
        req.logout();
        res.json("success");
        return;
    }

    function register(req, res) {
        var user = req.body;
        user.password = bcrypt.hashSync(user.password);
        userModel.findUserByUsername(user.username).then(function (data) {
            if(data){
                res.status(400).send('Username has already been taken!');
                return;
            } else{
                userModel.createUser(user).then(
                    function(user){
                        if(user){
                            req.login(user, function(err) {
                                if(err) {
                                    res.status(400).send(err);
                                } else {
                                    res.json(user);
                                }
                            });
                        }
                    }
                );
            }
        })

    }

    function loggedIn(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    function localStrategy(username, password, done) {
        userModel.findUserByUserName(username).then(
            function (user) {
                if (user && bcrypt.compareSync(password, user.password)) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            },
            function (err) {
                res.send(400).send(err);
            });
    }

    function createUser(req, res) {
        console.log(req.body);
        const user = req.body;
        //const user = { username: req.body.username, password: req.body.password};
        userModel.createUser(user)
            .then(
                function (user) {
            res.send(user);
        }, function(error){
            console.log("Error creating user:" + error);
            res.status(400);

        });
    }

    function findUserById(req, res){
        const userId = req.params['uid'];
        /*const user = users.find(function (user) {
            return user._id === userId;
        });
        if (user) {
            res.json(user);
            return;
        }
        res.send({});*/
        userModel.findById(userId)
            .then(
                function(user){

            res.send(user);
        }, function(error){
            console.log("Error finding user" + error);
            res.status(400).send(error);

        });
    }
    //try to use this with promises instead of callbacks
    //return by exec is a promise without arguments
    //use the .then instead of exec because I don't need full promises

    function findUserByCredentials(req, res) {
        const username = req.query["username"];
        const password = req.query["password"];
        /*var user = null;

        if (username && password) {
            user = users.find(function (user) {
                return user.username === username && user.password === password;
            });
            res.json(user);
        }*/
        console.log(username)
        console.log(password)

        userModel.findByCredentials(username, password)
            .then(
                function(user){
            console.log(user)
            res.send(user);
        }, function(error){
            console.log("Error finding user by credentials" + error);
            res.status(400);
        });
    }

    function findUserByUsername(req, res) {
        var username = req.query["username"];
        /*for (var i in users) {
            if (users[i].username === username) {
                res.json(users[i]);
                return;
            }
        }*/
        userModel.findUserByUserName(username)
            .then(
                function(user){
            res.send(user);
        }, function(error){
            console.log("Error finding user by username:" + error);
            res.status(400).send(error);
        });
    }

    function updateUser(req, res) {
        var userId = req.params['uid'];
        var user = req.body;

        /*for (var i in users) {
            if (users[i]._id === id) {
                users[i] = user;
                res.send(users[i]);
                return;
            }
        }*/
        userModel.updateUser(userId,user)
            .then(
                function(user) {
                    res.send(user);
            }, function (error) {
                console.log("Error updating user:" + error);
                res.status(400).send(error);
            }
        );
    }

    function deleteUser(req, res) {
        const userId = req.params['uid'];
        /*for (const i in users) {
            if (users[i]._id === id) {
                const j = + i;
                users.splice(j, 1);
                return;
            }
        }
        res.json(users);
    }*/
        userModel.deleteUser(userId)
            .then(
                function(user) {
                    res.send(user);
            }, function (error) {
                console.log("Error deleting user:" + error);
                res.status(400).send(error);
            }
        );
    }
}


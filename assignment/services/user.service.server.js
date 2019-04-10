/** For A6
 var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var bcrypt = require('bcrypt-nodejs');*/

module.exports = function (app) {

    //HTTP methods for users below
    app.post("/api/user", createUser);
    app.get("/api/username", findUserByUsername);
    app.get("/api/user", findUserByCredentials);
    app.get('/api/user/:uid', findUserById)
    app.put("/api/user/:uid", updateUser);
    app.delete("/api/user/:uid", deleteUser);
    /**app.post('api/login', passport.authenticateUser)
     * app.post('api/logout', logout);
     * app.post('api/register', register); when on the site you want to check if the user is logged in
     * The shared service is so that as the user goes across the web page then you want to maintain that
     * object and can immediately access that user
     */

    var userModel = require('../model/user/user.model.server');

    /**login and logout logic here uses the passport authentication
     * const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);
    passport.use(new LocalStrategy(localStrategy));

    function localStrategy(username, password, done) {
        userModel
            .findByCredentials(username, password)
            .then(
                function(user) {
                    if(user.username === username && user.password === password) {

                    }
                }
            )
    }

    function serializeUser(user, done) {
        done(null, user);
    }
    function deserializeUser(user, done) {
        userModel
    }*/


    /**const users = [
        {_id: "123", username: "alice",    password: "pass1",    firstName: "Alice",  lastName: "Wonderland", email: "alice@gmail.com"},
        {_id: "234", username: "bob",      password: "pass2",      firstName: "Bob",    lastName: "Marley", email: "bob@gmail.com"},
        {_id: "345", username: "charly",   password: "pass3",   firstName: "Charly", lastName: "Garcia", email: "charly@gmail.com"},
        {_id: "456", username: "jannunzi", password: "pass4", firstName: "Jose",   lastName: "Annunzi", email: "jose@gmail.com"}
    ];

    const users_db = [
        {username: "alice",    password: "pass1",    firstName: "Alice",  lastName: "Wonderland", email: "alice@gmail.com"},
        {username: "bob",      password: "pass2",      firstName: "Bob",    lastName: "Marley", email: "bob@gmail.com"},
        {username: "charly",   password: "pass3",   firstName: "Charly", lastName: "Garcia", email: "charly@gmail.com"},
        {username: "jannunzi", password: "pass4", firstName: "Jose",   lastName: "Annunzi", email: "jose@gmail.com"}
    ];*/

    function createUser(req, res) {
        console.log(req.body);
        const user = { username: req.body.username, password: req.body.password};
        userModel.createUser(user)
            .then(
                function (user) {
            res.send(user);
        }, function(error){
            console.log("Error creating user:" + error);
            res.status(400);

        });
        /*const id = Math.floor(Math.random() * 1000);
        user._id = id.toString();
        //code below is to ensure that the user ID is not used twice and doesn't present any problems with finding users.
        /*while(users.find(user._id)) {
            const id = Math.floor(Math.random() * 1000);
            user._id = id.toString();
        }
        users.push(user);
        res.json(user);*/
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


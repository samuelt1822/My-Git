module.exports = function (app) {

    //HTTP methods for users below
    app.post("/api/user", createUser);
    app.get("/api/user/:uid", findUserById);
    app.get("/api/username", findUserByUsername);
    app.get("/api/user", findUserByCredentials);
    app.put("/api/user/:uid", updateUser);
    app.delete("/api/user/:uid", deleteUser);


    const users = [
        {_id: "123", username: "alice",    password: "pass1",    firstName: "Alice",  lastName: "Wonderland", email: "alice@gmail.com"},
        {_id: "234", username: "bob",      password: "pass2",      firstName: "Bob",    lastName: "Marley", email: "bob@gmail.com"},
        {_id: "345", username: "charly",   password: "pass3",   firstName: "Charly", lastName: "Garcia", email: "charly@gmail.com"},
        {_id: "456", username: "jannunzi", password: "pass4", firstName: "Jose",   lastName: "Annunzi", email: "jose@gmail.com"}
    ];

    function createUser(req, res) {
        const user = req.body;
        const id = Math.floor(Math.random() * 1000);
        user._id = id.toString();
        users.push(user);
        res.json(user);
    }

    function findUserById(req, res){
        const userId = req.params['uid'];
        const user = users.find(function (user) {
            return user._id === userId;
        });
        if (user) {
            res.json(user);
            return;
        }
        res.send({});
    }

    function findUserByCredentials(req, res) {
        const username = req.query["username"];
        const password = req.query["password"];
        var user = null;

        if (username && password) {
            user = users.find(function (user) {
                return user.username === username && user.password === password;
            });
            res.json(user);
        }
    }

    function findUserByUsername(req, res) {
        var username = req.query["username"];
        for (var i in users) {
            if (users[i].username === username) {
                res.json(users[i]);
                return;
            }
        }
    }

    function updateUser(req, res) {
        var id = req.params['uid'];
        var user = req.body;

        for (var i in users) {
            if (users[i]._id === id) {
                users[i] = user;
                res.send(users[i]);
                return;
            }
        }
    }

    function deleteUser(req, res) {
        const id = req.params['uid'];
        for (const i in users) {
            if (users[i]._id === id) {
                const j = + i;
                users.splice(j, 1);
                return;
            }
        }
        res.json(users);
    }
}


module.exports = function (app) {
    var websiteModel = require('../model/website/website.model.server');

    /*HTTP methods for websites below*/
    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findAllWebsitesForUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put("/api/website/:websiteId", updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);

    /*var websites = [
        { _id: "1", name: "Facebook", developerId: "123", description: "Lorem"},
        { _id: "2", name: "Twitter", developerId: "234", description: "Lorem"},
        { _id: "3", name: "Gizmodo", developerId: "345", description: "Lorem"},
        { _id: "4", name: "Go", developerId: "123", description: "Lorem"},
        { _id: "5", name: "Tic Tac Toe", developerId: "123", description: "Lorem"},
        { _id: "6", name: "Amazon", developerId: "345", description: "Lorem"},
        { _id: "7", name: "Rent the Runway", developerId: "123", description: "Lorem"},
        { _id: "8", name: "Nova", developerId: "123", description: "Lorem"},
        { _id: "9", name: "History Channel", developerId: "234", description: "Lorem"}
    ];*/

    function createWebsite(req, res){
        const userId = req.params['userId'];
        const website = req.body;
        console.log(website);
        /*const id = Math.floor(Math.random() * 1000);
        website._id = id.toString();
        website.developerId = userId;
        websites.push(website);
        const websitesForUser = getAllWebsites(userId);
        res.json(websitesForUser);*/
        websiteModel.createWebsite(userId, website)
            .then(
                function(website){
                res.send(website);
            }, function(error){
                res.status(400).send("Error creating website:" + error);
            }
        );
    }

    function getAllWebsites(userId){
        const websiteList = [];
        for(var i = 0; i < websites.length; i++) {
            if (websites[i].developerId === userId) {
                websiteList.push(websites[i]);
            }
        }
        return websiteList;
    }
    function findAllWebsitesForUser(req, res){
        const userId = req.params['userId'];
        /*const websiteList = [];
        for(var i = 0; i < websites.length; i++) {
            if (websites[i].developerId === userId) {
                websiteList.push(websites[i]);
            }
        }
        res.json(websiteList);
        return;*/
        websiteModel.findAllWebsitesForUser(userId)
            .then(
                function (websites) {
                    res.status(200).send(websites);
                }, function (error) {
                    res.status(400).send(error);
                }
            );
    }

    function findWebsiteById(req,res){
        var websiteId = req.params.websiteId;
        /*for(var i in websites){
            if(websites[i]._id === websiteId){
                res.send(websites[i]);
                return;
            }
        }
        res.send({});*/
        websiteModel.findWebsiteById(websiteId)
            .then(
                function(website){
                    res.send(website);
                }, function (error) {
                    res.status(400).send(error);
                }
            )
    }

    function updateWebsite(req, res){
        const websiteId = req.params['websiteId'];
        var updatedWebsite = req.body;
        websiteModel.updateWebsite(websiteId,updatedWebsite)
            .then(
                function (website) {
                    res.send(website);
                }, function (error) {
                    res.status(400).send(error);
                }
            );
        /*for(var i = 0; i < websites.length; i++) {
            if (websites[i]._id === websiteId) {
                websites[i] = updatedWebsite;
                updatedWebsite = websites[i];
                break;
            }
        }
        res.json(updatedWebsite);
        return;*/
    }
    function simpleFindWebsiteById(websiteId){
        for(var i in websites) {
            if(websites[i]._id === websiteId) {
                return websites[i];
            }
        }
    }

    function deleteWebsite(req, res){
        const websiteId = req.params['websiteId'];
        websiteModel.deleteWebsite(websiteId)
            .then(
                function (website) {
                    res.json(website);
                }, function (error) {
                    res.status(400).send(error);
                }
            );
    }
        /*var website = simpleFindWebsiteById(websiteId);
        for(var i = 0; i < websites.length; i++) {
            if (websites[i]._id === websiteId) {
                const j = + i;
                websites.splice(j, 1);
                var webVar = getAllWebsites(website.developerId);
                res.json(webVar);
                return;
            }
        }
        res.send({});*/

}




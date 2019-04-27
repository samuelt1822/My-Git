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
        websiteModel.createWebsite(userId, website)
            .then(
                function(website){
                res.send(website);
            }, function(error){
                res.status(400).send("Error creating website:" + error);
            }
        );
    }

    function findAllWebsitesForUser(req, res){
        const userId = req.params['userId'];

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
        var websiteId = req.params['websiteId'];

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

}




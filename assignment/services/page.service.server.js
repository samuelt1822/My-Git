module.exports = function (app) {
    var pageModel = require('../model/page/page.model.server');

    /*HTTP methods for pages below*/
    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);



    /*var pages = [
        {_id: '1', name: 'New Stories', websiteId: '8', description: 'Archaeologists find new bones.'},
        {_id: '2', name: 'Top Scores', websiteId: '4', description: 'Player One score is 57. Player Two score is 99.'},
        {_id: '3', name: 'Chats', websiteId: '1', description: 'Open chats with 4 people.'},
        {_id: '4', name: 'Directions',websiteId: '4', description: 'Each player gets two one piece and the pieces ' +
                'are different colors.'},
        {_id: '5', name: 'Specials', websiteId: '9', description: 'How The World Was Born.'},
        {_id: '6', name: 'Favorites', websiteId: '6', description: 'Umbrella, table, dress'},
        {_id: '7', name: 'About', websiteId: '7', description: 'We are a designer clothing rental company.'},
        {_id: '8', name: 'Instructions', websiteId: '5', description: 'Each player alternates moves.'},
        {_id: '9', name: 'Contact', websiteId: '7', description: 'You can reach us via email.'},
        {_id: '10', name: 'News', websiteId: '1', description: 'There is a lot of news today.'}
    ];*/

    function createPage(req, res){
        const websiteId = req.params['websiteId'];
        const newPage = req.body;

        pageModel.createPage(websiteId, newPage)
            .then(
                function(newPage) {
                    res.status(200).send(newPage);
                },
                function(error) {
                    res.status(400).send(error);
                }
            );

    }


    function findAllPagesForWebsite(req, res){
        const websiteId = req.params['websiteId'];

        pageModel.findAllPagesForWebsite(websiteId)
            .then(
                function(pages){
                    res.status(200).send(pages);
                }, function (error) {
                    res.status(404).send(error);
                }
            );
    }

    function findPageById(req, res){
        const pageId = req.params['pageId'];

        pageModel.findPageById(pageId)
            .then(
                function(page){
                    res.status(200).send(page);
                }, function(error) {
                    res.status(404).send(error);
                }
            );
    }

    function updatePage(req, res) {
        const page = req.body;
        const pageId = req.params['pageId'];

        pageModel.updatePage(pageId, page)
            .then(
                function(page){
                    res.status(200).send(page);
                },
                function(error) {
                    res.status(404).send(error);
                }
            );
    }


    function deletePage(req, res) {
        const pageId = req.params['pageId'];

        pageModel.deletePage(pageId)
            .then(
                function(page){
                    res.status(200).send(page);
                }, function (error) {
                    res.status(404).send(error);
                }
            );
    }

}



module.exports = function (app) {

    /*HTTP methods for pages below*/
    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    var pages = [
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
    ];

    function createPage(req, res){
        const websiteId = req.params['websiteId'];
        const newPage = req.body;
        const id = Math.floor(Math.random() * 1000);
        const pageId = id.toString();
        newPage['_id'] = pageId;
        newPage['websiteId'] = websiteId;
        pages.push(newPage);
        const allWebPages = simpleFindAllPages(websiteId);
        res.json(allWebPages);

    }

    function simpleFindAllPages(websiteId){
        const allWebPages=[];
        for(var i = 0; i < pages.length; i++){
            if(pages[i].websiteId === websiteId){
                allWebPages.push(pages[i]);
            }
        }
        return allWebPages;
    }

    function findAllPagesForWebsite(req, res){
        const websiteId = req.params['websiteId'];
        const allWebPages=[];
        for(var i = 0; i < pages.length; i++){
            if(pages[i].websiteId === websiteId){
                allWebPages.push(pages[i]);
            }
        }
        res.json(allWebPages);
        return;
    }

    function findPageById(req, res){
        const pageId = req.params.pageId;
        for(var i in pages){
            if(pages[i]._id === pageId){
                res.json(pages[i]);
                return;
            }
        }
        res.send({});
    }

    function updatePage(req, res) {
        const page = req.body;
        const pageId = req.params.pageId;
        for (const i in pages) {
            if (pages[i]._id === pageId) {
                pages[i]= page;
                res.json(pages[i]);
                return;
            }
        }
        res.send({});
    }

    function simpleFindPageById(pageId){
        for(var i in pages){
            if(pages[i]._id === pageId) {
                return pages[i];
            }
        }
    }

    function deletePage(req, res) {
        const pageId = req.params.pageId;
        const page  =  simpleFindPageById(pageId);
        const webId = page['websiteId'];
        for (const i in pages) {
            if (pages[i]._id === pageId) {
                const j = + i;
                pages.splice(j, 1);
                const pagesForWeb = simpleFindAllPages(webId);
                res.json(pagesForWeb);
                return;
            }
        }
        res.send({});

    }

}



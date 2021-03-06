module.exports = function (app) {
    var multer = require('multer');
    var upload = multer({dest: __dirname + '/../../src/app/upload'});

    /*HTTP methods for widgets below*/
    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findWidgetsForPage);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId", updateWidgets);
    app.delete("/api/widget/:widgetId", deleteWidget);
    app.put("/api/page/:pageId/widget", resortWidget);
    app.post("/api/upload",upload.single('myFile'),uploadImage);
    //app.post("/api/upload", uploadImage); future use?
    var widgetModel = require('../model/widget/widget.model.server');


    /*const widgets = [
        { _id: "1", name: "name", widgetType: "HEADING", pageId: "3", size: "2", text: "Two months after Venezuelan " +
                "President Nicolas Maduro visited his counterpart Recep Tayyip Erdogan in Ankara, a mysterious " +
                "company called Sardes sprang into existence. The firm started business with a bang in January " +
                "of 2018, when it imported about $41 million worth of gold from Venezuela, the first such " +
                "transaction between the two countries in records that go back 50 years. The next month its volume " +
                "more than doubled."},
        { _id: "2", name: "name", widgetType: "HEADING", pageId: "2"},
        { _id: "3", name: "name", widgetType: "IMAGE", pageId: "3", size: "2", text: "text", width: "100%",
            url: "https://lorempixel.com/400/200/"},
        { _id: "4", name: "name", widgetType: "IMAGE", pageId: "4", size: "2", text: "text", width: "100%",
            url: "https://www.kalw.org/sites/kalw/files/styles/medium/public/201601/Nature-Brain.jpg"},
        { _id: "5", name: "name", widgetType: "YOUTUBE", pageId: "3", size: "2", text: "text", width: "100%",
            url: "https://www.youtube.com/embed/x_CrVERam8c"},
        { _id: "6", name: "name", widgetType: "HEADING", pageId: "3", size: "1", text: "Get social with family " +
                "and friends."},
    ];*/

    function createWidget (req, res) {
        const pageId = req.params['pageId'];
        var widget = req.body;
        /*widgets.push(widget);
        var widgetList = simpleFindWidgetsForPage(pageId);
        res.json(widgetList);*/
        widgetModel.createWidget(pageId,widget)
            .then(
                function (widget) {
            res.status(200).send(widget);
        }, function (error) {
                    res.status(404).send(error);
                });
    }


    function findWidgetsForPage (req, res) {
        const pageId = req.params['pageId'];

        widgetModel.findAllWidgetsForPage(pageId)
            .then(
                function (widget) {
                    res.status(200).send(widget);
                }, function (error) {
                    res.status(404).send(error);
                });
    }


    function findWidgetById (req, res) {
        const widgetId = req.params['widgetId'];

        widgetModel.findWidgetById(widgetId)
            .then(
                function(widget) {
                    res.status(200).send(widget);
                }, function (error) {
                    res.status(404).send(error);
                });
    }

    function updateWidgets(req, res) {
        var widgetId = req.params['widgetId'];
        var widget = req.body;
        widgetModel.updateWidget(widgetId, widget)
            .then(
                function (widget) {
                    res.status(200).send(widget);
                    }, function (error) {
                    res.status(404).send(error);
            });
    }

    function getWidgetById(widgetId){
        for(var i in widgets){
            if(widgets[i]._id === widgetId) {
                return widgets[i];
            }
        }
    }
    function deleteWidget(req, res) {
        var widgetId = req.params['widgetId'];

        widgetModel.deleteWidget(widgetId)
            .then(
                function (widget) {
                    res.status(200).send(widget);
                }, function (error) {
                    res.status(404).send(error);
                });
    }

    function resortWidget(req,res) {
        var startIndex = parseInt(req.query["initial"]);
        var endIndex = parseInt(req.query["final"]);
        var pageId = req.params.pageId;

        widgetModel.reorderWidget(pageId, startIndex, endIndex)
            .then(
                function(page) {
                    res.status(200).send(page);
                }, function(error) {
                    res.status(400).send(error);
                });
    }

    function uploadImage(req, res){

        currentWidget = req.body;
        widgetId = req.body.widgetId;
        console.log('In file upload function');
        console.log('widgetId is :' + widgetId);
        var myFile = req.file;
        var userId = req.body.userId;
        var websiteId = req.body.websiteId;
        var pageid = req.body.pageId;
        var originalname = myFile.originalname;
        var filename = myFile.filename;
        console.log('filename: '+filename)
        var path = myFile.path;
        var destination = myFile.destination;
        var mysize = myFile.size;
        var mimetype = myFile.mimetype;

        if(req.file === null) {
            console.log(req.body);
            console.log("undefined file");
            return;
        }
        widget = getWidgetById(widgetId)
        widget.url = 'upload/' + filename;
        console.log(path + "\n");
    }
}

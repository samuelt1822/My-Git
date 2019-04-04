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


    const widgets = [
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
    ];

    function createWidget (req, res) {
        const pageId = req.params['pageId'];
        var widget = req.body;
        /*widgets.push(widget);
        var widgetList = simpleFindWidgetsForPage(pageId);
        res.json(widgetList);*/
        widgetModel.createWidget(pageId,widget).then( function (widget) {
            res.json(widget);
        })
    }

    function simpleFindWidgetsForPage(pageId){
        var pageWidgets = [];
        for(var i in widgets){
            if(widgets[i].pageId === pageId){
                pageWidgets.push(widgets[i]);
            }
        }
        return pageWidgets;
    }

    function findWidgetsForPage (req, res) {
        const pageId = req.params['pageId'];
        /*var widgetList = simpleFindWidgetsForPage(pageId);
        res.json(widgetList);*/
        widgetModel.findAllWidgetsForPage(pageId).then( function (widget) {
            res.json(widget);
        })
    }


    function findWidgetById (req, res) {
        const widgetId = req.params['widgetId'];
        for(var i in widgets){
            if(widgets[i]._id === widgetId) {
                res.json(widgets[i]);
                return;
            }
        }
        res.send();
    }

    function updateWidgets(req, res) {
        var widgetId = req.params['widgetId'];
        var widget = req.body;
        widgetModel.updateWidget(widgetId, widget).then(
            function (widget) {
                res.send(widget);
            },
            function (error) {
                res.send(error);
            }
        );
    }
        /*for (var i in widgets) {
            if (widgets[i]._id === widgetId) {
                widgets[i].name = widget['name'];
                widgets[i].text = widget['text'];
                switch (widget['widgetType']) {
                    case 'HEADER':
                        widgets[i].size = widget['size'];
                        res.json(widgets[i]);
                        return;

                    case 'IMAGE':
                        widgets[i].url = widget['url'];
                        widgets[i].width = widget['width'];
                        res.json(widgets[i]);
                        return;

                    case 'YOUTUBE':
                        widgets[i].url = widget['url'];
                        widgets[i].width = widget['width'];
                        res.json(widgets[i]);
                        return;
                    case 'HTML':
                        widgets[i].url = widget['size'];
                        res.json(widgets[i]);
                        return;
                }
                res.send();
            }
        }
    }*/
    function getWidgetById(widgetId){
        for(var i in widgets){
            if(widgets[i]._id === widgetId) {
                return widgets[i];
            }
        }
    }
    function deleteWidget(req, res) {
        var widgetId = req.params['widgetId'];
        var widget = getWidgetById(widgetId);
        var pageId = widget['pageId'];
        for (const i in widgets) {
            if (widgets[i]._id === widgetId) {
                const j = + i;
                widgets.splice(j, 1);
                var allWidgets = simpleFindWidgetsForPage(pageId);
                res.json(allWidgets);
            }
        }
        res.json();
    }

    function resortWidget(req,res) {
        var startIndex = parseInt(req.query["initial"]);
        var endIndex = parseInt(req.query["final"]);
        if(endIndex > startIndex){
            var index =  widgets[startIndex];
            for(var i = startIndex; i < endIndex; i++){
                widgets[i] = widgets[i+1];
            }
            widgets[endIndex] = index;
        }else{
            index = widgets[startIndex];
            for(var i = startIndex; i > endIndex; i--){
                widgets[i] = widgets[i-1];
            }
            widgets[endIndex] = index;
        }
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

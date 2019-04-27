
var mongoose = require('mongoose');

//this converts the schema to a model that can be used
var widgetSchema = require("./widget.schema.server");
var widgetModel = mongoose.model("Widgets", widgetSchema);

var pageModel = require('../page/page.model.server');

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;

module.exports = widgetModel;


function createWidget(pageId,widget) {
    return widgetModel.create(widget)
        .then(
            function (widget) {
            pageModel.findPageById(pageId)
                .then(
                    function (page) {
                    widget.position = page.widgets.length;
                    page.widgets.push(widget);
                    page.save();
                });
            return widget;
        });
}

function findAllWidgetsForPage(pageId) {
    return widgetModel.find({pageId:pageId});
}

function findWidgetById(widgetId) {
    return widgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
    return widgetModel.findByIdAndUpdate(widgetId,widget);
}

function deleteWidget(widgetId) {
    return widgetModel.findByIdAndDelete(widgetId);
}

function reorderWidget(pageId,start,end) {
    return pageModel.findPageById(pageId).then(
        function (page) {
            page.widgets.splice(end, 0, page.widgets.splice(start, 1)[0]);
            return page.save();
        }
    )
}

import {Injectable} from '@angular/core';
import { Widget} from '../models/widget.model.client';

@Injectable()

export class WidgetServiceClient {
    constructor() {}

    widgets: Widget[] = [
        new Widget('1', 'HEADING', '1', '2', 'Two months after Venezuelan President Nicolas Maduro visited his' +
            'counterpart Recep Tayyip Erdogan in Ankara, a mysterious company called Sardes sprang into existence. The firm started ' +
            'business with a bang in January of 2018, when it imported about $41 million worth of gold from Venezuela, the first such ' +
            'transaction between the two countries in records that go back 50 years. The next month its volume more than doubled.'),
        new Widget('2', 'HEADING', '2'),
        new Widget('3', 'IMAGE', '3', '2', 'text', '100%', 'https://lorempixel.com/400/200/'),
        new Widget('4', 'IMAGE', '4', '2', 'text', '100%',
            'https://www.kalw.org/sites/kalw/files/styles/medium/public/201601/Nature-Brain.jpg'),
        new Widget('5', 'YOUTUBE', '3', '2', 'text', '100%', 'https://www.youtube.com/embed/x_CrVERam8c'),
        new Widget('6', 'HEADING', '3', '1', 'Get social with family and friends.'),
        /**new Widget('7', 'HEADING', '3', '1', 'SOCIAL INFO'),*/
        new Widget('8', 'HEADING', '4', '1', 'Gold Found!'),

        ];


    createWidget(pageId: String, widget: Widget) {
        const widgetLast: Widget = this.widgets.slice(-1).pop();
        let widgetLastNum = Number(widgetLast._id);
        widgetLastNum = widgetLastNum + 1;
        widget._id = widgetLastNum.toString();
        widget.pageId = pageId;
        this.widgets.push(widget);
        return this.widgets;
        }

    findWidgetsByPageId(pageId: String) {
        return this.widgets.filter(function (widget) {
            return widget.pageId === pageId;
        });

    }

    findWidgetById(widgetId: String) {
        return this.widgets.find(function (widget) {
            return widget._id === widgetId;
        });
    }

    updateWidget(widgetId: String, widget: Widget) {
        for (const i in this.widgets) {
            if (this.widgets[i]._id === widgetId) {
                return this.widgets[i] = widget;
            }
        }
    }
    deleteWidget(widgetId: String) {
        for (const i in this.widgets) {
            if (this.widgets[i]._id === widgetId) {
                const j = +i;
                this.widgets.splice(j, 1);
            }
        }
        return this.widgets;
    }
}

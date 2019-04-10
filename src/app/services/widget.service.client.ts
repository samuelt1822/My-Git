import {Injectable} from '@angular/core';
import { Widget} from '../models/widget.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';



@Injectable()

export class WidgetServiceClient {
    constructor(private http: HttpClient) {}
    baseUrl = environment.baseUrl;

    createWidget(pageId: String, widget: any) {
        /**below uncommented works */
        const url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.post(url, widget);
        /**const currentWidget = {_id: widget._id, name: widget['name'], widgetType: widget.widgetType, pageId: widget.pageId,
            size: widget.size, text: widget.text, width: widget.width, url: widget.url };
        return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', currentWidget);*/
    }

    findWidgetByPageId(pageId: String) {
        const url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.get(url);
    }

    findWidgetById(widgetId: String) {
        const url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.get(url);
    }

    updateWidget(widgetId: String, widget: any) {
        /**const currentWidget = {_id: widget['_id'], name: widget['name'], widgetType: widget['widgetType'],
            pageId: widget['pageId'], size: widget['size'],
            text: widget['text'], width: widget['width'], url: widget['url'] };
        return this.http.put(this.baseUrl + '/api/widget/' + widgetId, currentWidget);*/
        const url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.put(url, widget);
    }

    deleteWidget(widgetId: String) {
        return this.http.delete(this.baseUrl + '/api/widget/' + widgetId);
    }
    resortWidget(pageId: String, start: String, end: String) {
        const url = this.baseUrl + '/api/page' + pageId + '/widget?initial=' + start + '&final=' + end;
        return this.http.put(url, '');
    }
}

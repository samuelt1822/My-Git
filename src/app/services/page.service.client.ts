import {Injectable} from '@angular/core';
import { Page } from '../models/page.model.client';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';


@Injectable()

export class PageServiceClient {

    constructor(private http: HttpClient) {
    }

    baseURL = environment.baseUrl;

    createPage(websiteId: String, page: Page) {
        const currentPage = {_id: page._id, name: page.name, websiteId: page.websiteId, description: page.description };
        return this.http.post(this.baseURL + '/api/website/' + websiteId + '/page', currentPage );
    }
    findAllPagesForWebsite(websiteId: String) {
        return this.http.get(this.baseURL + '/api/website/' + websiteId + '/page');
    }
    findPageByWebsiteId(websiteId: String) {
        return this.http.get(this.baseURL + '/api/website/' + websiteId + '/page');
    }

    findPageById(pageId: String) {
        return this.http.get(this.baseURL + '/api/page/' + pageId);
    }

    updatePage(pageId: String, page: any) {
        const currentPage = {_id: page['_id'], name: page['name'], websiteId: page['websiteId'], description: page['description']};
        return  this.http.put(this.baseURL + '/api/page/' + pageId, currentPage);
    }

    deletePage(pageId: String) {
        return this.http.delete(this.baseURL + '/api/page/' + pageId);
    }
}


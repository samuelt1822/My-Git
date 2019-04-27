import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()


export class WebsiteServiceClient {


    constructor(private http: HttpClient) {}
    baseUrl = environment.baseUrl;

    createWebsite(userId: String, website: Website) {
        const newWeb = {name: website.name, developerId: website.developerId, description: website.description};
        return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', newWeb);
    }

    findWebsitesByUser(userId: String) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/website');
    }

    findWebsiteById(websiteId: String) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId);
    }

    updateWebsite(websiteId: String, website: any) {
        const updatedWeb = {name: website.name, developerId: website.developerId, description: website.description};
        return this.http.put(this.baseUrl + '/api/website/' + websiteId, updatedWeb);
    }

    deleteWebsite(websiteId: String) {
        return this.http.delete(this.baseUrl + '/api/website/' + websiteId);
    }
}

// _id: website._id,

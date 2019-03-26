import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()


export class WebsiteServiceClient {


    websites: Website[] = [
        new Website('1', 'Facebook', '123', 'Lorem'),
        new Website('2', 'Twitter', '456', 'Lorem'),
        new Website('3', 'Gizmodo', '234', 'Lorem'),
        new Website( '4', 'Go', '123', 'Lorem'),
        new Website( '5', 'Tic Tac Toe', '123', 'Lorem'),
        new Website( '6', 'Amazon', '345', 'Lorem'),
        new Website( '7', 'Rent the Runway', '345', 'Lorem'),
        new Website( '8', 'NOVA', '234', 'Lorem'),
        new Website( '9', 'History Channel', '456', 'Lorem'),
    ];

    constructor(private http: HttpClient) {}
    baseUrl = environment.baseUrl;

    createWebsite(userId: String, website: Website) {
        const newWeb = {_id: '', name: website.name, developerId: website.developerId, description: website.description};
        return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', newWeb);
    }

    findWebsitesByUser(userId: String) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/website');
    }

    findWebsiteById(websiteId: String) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId);
    }

    updateWebsite(websiteId: String, website: any) {
        const updatedWeb = {_id: website._id, name: website.name, developerId: website.developerId, description: website.description};
        return this.http.put(this.baseUrl + '/api/website/' + websiteId, updatedWeb);
    }

    deleteWebsite(websiteId: String) {
        return this.http.delete(this.baseUrl + '/api/website/' + websiteId);
    }
}

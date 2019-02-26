import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';

@Injectable()


export class WebsiteServiceClient {
    constructor() {}

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

    createWebsite(userId: String, website: Website) {
        const websiteLast: Website = this.websites.slice(-1).pop();
        let websiteLastNum = Number(websiteLast._id);
        websiteLastNum = websiteLastNum + 1;
        const newWebsiteId = websiteLastNum.toString();
        const new_website: Website = {
            _id: newWebsiteId,
            name: website.name,
            developerId: website.developerId,
            description: website.description
        };

        this.websites.push(new_website);
        return this.websites;
    }
    findWebsitesById(websiteId: String) {
        return this.websites.find(function (website) {
            return website._id === websiteId;
        });
    }
    /**filter vs find because we need the whole list associated with the user*/
    findWebsitesByUser(userId: String) {
        return this.websites.filter(function (website) {
            return website.developerId === userId;
        });
    }
    updateWebsite(websiteId: String, website: Website) {
        for (const i in this.websites) {
            if (this.websites[i]._id === websiteId) {
                return this.websites[i] = website;
            }
        }
    }
    deleteWebsiteById(websiteId: String) {
        for (const i in this.websites) {
            if (this.websites[i]._id === websiteId) {
                const j = +i;
                this.websites.splice(j, 1);
            }
        }
        return this.websites;
    }

}

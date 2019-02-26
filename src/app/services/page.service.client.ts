import {Injectable} from '@angular/core';
import { Page } from '../models/page.model.client';


@Injectable()

export class PageServiceClient {
    constructor() {
    }

    pages: Page[] = [
        new Page('1', 'New Stories', '8', 'Archaeologists find new bones.'),
        new Page('2', 'Top Scores', '4', 'Player One score is 57. Player Two score is 99.'),
        new Page('3', 'Chats', '1', 'Open chats with 4 people.'),
        new Page('4', 'Directions', '4', 'Each player gets two one piece and the pieces are' +
            'different colors.'),
        new Page('5', 'Specials', '9', 'How The World Was Born.'),
        new Page('6', 'Favorites', '6', 'Umbrella, table, dress'),
        new Page('7', 'About', '7', 'We are a designer clothing rental company.'),
        new Page('8', 'Instructions', '5', 'Each player alternates moves.'),
        new Page('9', 'Contact', '7', 'You can reach us via email.'),
        new Page('10', 'News', '1', 'There is a lot of news today.'),
    ];

    createPage(websiteId: String, page: Page) {
        const pageLast: Page = this.pages.slice(-1).pop();
        let pageLastNum = Number(pageLast._id);
        pageLastNum = pageLastNum + 1;
        const newPageId = pageLastNum.toString();
        const new_page: Page = {
            _id: newPageId,
            name: page.name,
            websiteId: page.websiteId,
            description: page.description
        };

        this.pages.push(new_page);
        return this.pages;
    }
    findPagesByWebsiteId(websiteId: String) {
        return this.pages.filter(function (page) {
            return page.websiteId === websiteId;
        });
    }
    findPageById(pageId: String) {
        return this.pages.find(function (page) {
            return page._id === pageId;
        });
    }
    updatePage(pageId: String, page: Page) {
        for (const i in this.pages) {
            if (this.pages[i]._id === pageId) {
                return this.pages[i] = page;
            }
        }
    }
    deletePageById(pageId: String) {
        for (const i in this.pages) {
            if (this.pages[i]._id === pageId) {
                const j = +i;
                this.pages.splice(j, 1);
            }
        }
        return this.pages;
    }

}


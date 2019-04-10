import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Website} from '../../../models/website.model.client';
import {WebsiteServiceClient} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {PageServiceClient} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') addPageForm: NgForm;
  page: Page;
  pages = [];
  userId: String;
  websiteId: String;
  currentPage: Page;
  name: String;
  description: String;
  errorFlag: boolean;
  successMsg = 'Your page has been added. You may add another or select Pages to return to your page list.';

  constructor(private pageService: PageServiceClient, private router: Router, private activatedRouter: ActivatedRoute) {
    /**this.page = new Page;
    console.log(this.page);*/
  }
    create() {
      const page = new Page(undefined, this.name, this.websiteId, this.description);
        /**this.page = new Page(this.page._id, this.page.name, this.websiteId, this.page.description);*/
       /** this.pageService.createPage(this.websiteId, page).subscribe(*/
       this.pageService.createPage(this.websiteId,
           {_id: undefined, name: this.currentPage.name, websiteId: this.currentPage.websiteId, description: this.currentPage.description})
           .subscribe((data: any) => {
                /**this.pages = data;*/
                const url = '/profile/' + this.userId + '/website/' + this.websiteId + '/page';
                this.router.navigateByUrl(url);
            }
        );
    }

  ngOnInit() {
      this.activatedRouter.params.subscribe(
          (params: any) => {
            this.userId = params['uid'];
            this.websiteId = params['wid'];
          }
      );
      console.log(this.userId);
      console.log(this.websiteId);
      this.currentPage = new Page('', '', this.websiteId, '');
  }
}


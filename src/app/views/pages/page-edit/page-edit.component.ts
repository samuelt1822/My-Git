import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {WebsiteServiceClient} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {PageServiceClient} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  page: Page;
  pages = [{}];
  userId = String;
  websiteId = String;

  constructor(private pageService: PageServiceClient, private router: Router, private activatedRouter: ActivatedRoute) { }

  editPage(page) {
    console.log(page);
    this.page = this.pageService.updatePage(this.page._id, page);
    if (this.page) {
    this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page']);
    }
  }
  deletePage() {
    console.log(this.pages);
    this.pages = this.pageService.deletePageById(this.page._id);
    console.log(this.pages);
    if (this.pages) {
       this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page']);
      }
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.page = this.pageService.findPageById(params['pid']);
    });
  }

}

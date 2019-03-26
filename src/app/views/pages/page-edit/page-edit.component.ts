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
  pages = [];
  userId: String;
  websiteId: String;
  currentPage = {};
  pageId: String;

  constructor(private pageService: PageServiceClient, private router: Router, private activatedRouter: ActivatedRoute) { }

  delete() {
    this.pageService.deletePage(this.pageId).subscribe(
        (data: any) => {
          this.pages = data;
          console.log(this.pages);
          const url = '/profile/' + this.userId + '/website/' + this.websiteId + '/page';
          this.router.navigateByUrl(url);
        }
    );
  }
  update() {
    this.pageService.updatePage(this.pageId, this.currentPage).subscribe(
        (data: any ) => {
          this.currentPage = data;
          const url = '/profile/' + this.userId + '/website/' + this.websiteId + '/page';
          this.router.navigateByUrl(url);
        },
    );
  }


  ngOnInit() {
    this.activatedRouter.params.subscribe(
        (params: any) => {this.userId = params.uid;
        this.websiteId = params.wid; this.pageId = params.pid; });
    this.pageService.findPageById(this.pageId)
        .subscribe((data: any) => {
          console.log(data);
          this.currentPage = data;
        });
  }

}

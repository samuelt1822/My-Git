import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageServiceClient} from '../../../services/page.service.client';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  userId: String;
  websiteId: String;
  pages: Page[];

  constructor(private pageService: PageServiceClient, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe((params: any) => {
          this.websiteId = params['wid'];
          this.userId = params['uid'];
          console.log('Start of page list comp');
        }
    );
      this.pageService.findPageByWebsiteId(this.websiteId)
          .subscribe((data: any) => {
              console.log(data);
              this.pages = data;
          });
      console.log(this.userId);
      console.log(this.websiteId);
  }
}

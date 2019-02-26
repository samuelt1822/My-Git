import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageServiceClient} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  userId: String;
  websiteId: String;
  pages = [{}];

  constructor(private pageService: PageServiceClient, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.userId = params['uid'];
        }
    );
    console.log(this.websiteId);
    this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
  }

}

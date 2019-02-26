import { Component, OnInit } from '@angular/core';
import { WebsiteServiceClient } from '../../../services/website.service.client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  userId: String;
  websites = [{}];

  constructor(private websiteService: WebsiteServiceClient, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
    );
    console.log(this.userId);
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }

}

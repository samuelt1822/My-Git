import { Component, OnInit } from '@angular/core';
import { Website } from '../../../models/website.model.client';
import {WebsiteServiceClient} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  userId: String;
  websiteId: String;
  website: Website;
  currentWeb = {};
  websites = [];
  constructor(private websiteService: WebsiteServiceClient, private link: Router, private activatedRouter: ActivatedRoute) { }

  delete() {
    this.websiteService.deleteWebsite(this.websiteId).subscribe(
        (data: any) => {
          this.websites = data;
          console.log(this.websites);
          const url = '/profile/' + this.userId + '/website';
          console.log(url);
          this.link.navigateByUrl(url);
        }
    );
  }
  update() {
    this.websiteService.updateWebsite(this.websiteId, this.currentWeb).subscribe(
        (data: any) => {
          const url = '/profile/' + this.userId + '/website';
          this.link.navigateByUrl(url);
        }
    );
  }
  findWebByWebId(currentWebId: String) {
    console.log('currentWebId is :' + currentWebId);
    this.websiteService.findWebsiteById(currentWebId).subscribe(
        (data: any) => {
          this.currentWeb = data;
          const  url = '/user/' + this.userId + '/website/' + this.currentWeb['_id'];
          this.link.navigateByUrl(url);
        }
    );
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe((params: any) => { this.userId = params.uid;
      this.websiteId = params.wid; });
    console.log('webId' + this.websiteId);

    this.websiteService.findWebsiteById(this.websiteId).subscribe((data: any) => {
      this.currentWeb = data;
    });
    this.websiteService.findWebsitesByUser(this.userId).subscribe((data: any) => {
      this.websites = data;
    });
  }
}

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
  website: Website;
  websites = [{}];
  constructor(private websiteService: WebsiteServiceClient, private router: Router, private activatedRouter: ActivatedRoute) { }

  editWebsite(website) {
    console.log(website);
    this.website = this.websiteService.updateWebsite(this.website._id, website);
    if (this.website) {
      this.router.navigate(['/profile', this.website.developerId, 'website']);
    }
  }
  deleteWebsite() {
    console.log(this.websites);
    this.websites = this.websiteService.deleteWebsiteById(this.website._id);
    console.log(this.websites);
    if (this.websites) {
      this.router.navigate(['/profile', this.website.developerId, 'website']);
    }
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.website = this.websiteService.findWebsitesById(params['wid']);
    });
  }
}

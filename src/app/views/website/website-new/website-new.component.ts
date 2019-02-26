import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Website} from '../../../models/website.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteServiceClient} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') addWebsiteForm: NgForm;
  website: Website;
  userId: String;
  errorFlag: boolean;
  successMsg = 'Your website has been added. You may add another or select Websites to return to your website list.';
  websites = [{}];
  constructor(private websiteService: WebsiteServiceClient, private router: Router, private activatedRouter: ActivatedRoute) {
    this.website = new Website();
    console.log(this.website);
  }
  addWebsite() {
    this.website.name = this.addWebsiteForm.value.name;
    console.log(this.website.name);
    this.website.description = this.addWebsiteForm.value.description;
    console.log(this.website.description);
    this.website.developerId = this.userId;
    console.log(this.website.developerId);
    this.websites = this.websiteService.createWebsite(this.userId, this.website);
    console.log(this.website);
    console.log(this.websites);
    if (this.website) {
      this.errorFlag = true;
      /**this.router.navigate(['profile/', this.userId, '/website']);*/
    } else {
      this.errorFlag = false;
    }

  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
    );
    console.log(this.userId);
  }

}

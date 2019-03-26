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
  websites: Website[];
  constructor(private websiteService: WebsiteServiceClient, private router: Router, private activatedRouter: ActivatedRoute) {
    /**this.website = new Website();*/
    console.log(this.website);
  }

  create() {
    this.website = new Website(this.website._id, this.website.name, this.userId, this.website.description);
    this.websiteService.createWebsite(this.userId, this.website).subscribe(
        (data: any) => {
          const url = '/profile/' + this.userId + '/website';
          this.router.navigateByUrl(url);
          this.websiteService.findWebsitesByUser(this.userId).subscribe((websites: any) => {
            this.websites = websites;
          });
        }
    );

  }

  ngOnInit() {
    this.activatedRouter.params.subscribe((params: any) => {this.userId = params.uid; });
      this.websiteService.findWebsitesByUser(this.userId).subscribe((data: any) => {
        this.websites = data;
      });
      this.website = new Website();
      console.log(this.website.developerId);

}
}

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
  pages = [{}];
  userId: String;
  websiteId: String;
  errorFlag: boolean;
  successMsg = 'Your page has been added. You may add another or select Pages to return to your page list.';

  constructor(private pageService: PageServiceClient, private router: Router, private activatedRouter: ActivatedRoute) {
    this.page = new Page;
    console.log(this.page);
  }
  addPage() {
    this.page.name = this.addPageForm.value.name;
    console.log(this.page.name);
    this.page.description = this.addPageForm.value.description;
    console.log(this.page.description);
    this.page.websiteId = this.websiteId;
    console.log(this.websiteId);
    this.pages = this.pageService.createPage(this.websiteId, this.page);
    console.log(this.page);
    console.log(this.pages);
    if (this.page) {
      this.errorFlag = true;
    } else {
      this.errorFlag = false;
    }
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
  }
}


import { Component, OnInit } from '@angular/core';
import {PageServiceClient} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {WidgetServiceClient} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  userId: String;
  pageId: String;
  websiteId: String;
  widgets = [{}];

  constructor(private widgetService: WidgetServiceClient, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(
        (params: any) => {
          this.pageId = params['pid'];
          this.userId = params['uid'];
          this.websiteId = params['wid'];
        }
    );
    console.log(this.pageId);
    this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
    console.log(this.widgets);
  }

}



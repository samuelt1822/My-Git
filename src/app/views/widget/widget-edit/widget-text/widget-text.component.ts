import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetServiceClient} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  flag = false;
  websiteId: string;
  pageId: string;
  widgetId: string;
  userId: string;
  widget = {};

  constructor(private widgetService: WidgetServiceClient, private router: Router, private activatedRouter: ActivatedRoute) { }

  updateWidget() {
    if (this.widget['name'] === undefined) {
      this.flag = true;
    } else {
      this.widgetService.updateWidget(this.widgetId, this.widget)
          .subscribe(
              (widget: Widget) => {
                  this.widget = widget;
                const url = '/profile/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/';
                this.router.navigateByUrl(url);
              },
              (error: any) => console.log(error)
          );
    }
  }

  deleteWidget() {

    // call delete widget function from widget client service
    this.widgetService.deleteWidget(this.widgetId)
        .subscribe(
            (data: any) => {
              const url = '/profile/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget';
              this.router.navigateByUrl(url);
            },
            (error: any) => console.log(error)
        );

  }

  ngOnInit() {

    this.activatedRouter.params
        .subscribe(
            (params: any) => {
              this.websiteId = params['wid'];
              this.pageId = params['pid'];
              this.widgetId = params['wgid'];
              this.userId = params['uid'];
            }
        );
    this.widgetService.findWidgetById(this.widgetId)
        .subscribe(
            (data: any) => this.widget = data,
            (error: any) => console.log(error)
        );
  }
}


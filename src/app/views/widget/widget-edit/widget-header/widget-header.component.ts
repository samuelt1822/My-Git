import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetServiceClient} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  widget: Widget;
  widgets = [{}];

  constructor(private widgetService: WidgetServiceClient, private router: Router, private activatedRouter: ActivatedRoute) { }
  editWidget(widget) {
    console.log(widget);
    this.widget = this.widgetService.updateWidget(this.widget._id, widget);
    console.log(this.widget);
    if (this.widgets) {
      this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    }
  }
  deleteWidget() {
    console.log(this.widgets);
    this.widgets = this.widgetService.deleteWidget(this.widget._id);
    console.log(this.widgets);
    if (this.widgets) {
      this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    }
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widget = this.widgetService.findWidgetById(params['wgid']);
    });
  }

}

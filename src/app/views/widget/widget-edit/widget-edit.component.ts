import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';
import {WidgetServiceClient} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  /**widget: Widget;*/
  widget = {};
  widgetId: string;
  userId: string;
  pageId: string;
  websiteId: string;


  constructor(private widgetService: WidgetServiceClient, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe((params: any) => {
      this.userId = params.uid;
      this.pageId = params.pid;
      this.websiteId = params.wid;
      this.widgetId = params.wgid;
      console.log(this.widgetId);
    });
    this.widgetService.findWidgetById(this.widgetId).subscribe((data: any) => {
      this.widget = data;
      console.log(this.widget);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetServiceClient} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  userId: String;
  pageId: String;
  websiteId: String;
  widgets: [];

  constructor(private widgetService: WidgetServiceClient, private sanitizer: DomSanitizer, private activatedRouter: ActivatedRoute) {}

    getUrl(widget: Widget) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(widget.url + '');
    }
    sortWidget(indexes) {
        this.widgetService.resortWidget(this.pageId, indexes.startIndex, indexes.endIndex).subscribe();
    }
  ngOnInit() {
      this.activatedRouter.params.subscribe((params: any) => {
          this.userId = params.uid;
          this.websiteId = params.wid;
          this.pageId = params.pid;
      });
      this.widgetService.findWidgetByPageId(this.pageId).subscribe((data: any) => {
          this.widgets = data;
          console.log(this.widgets);
      });
  }

}



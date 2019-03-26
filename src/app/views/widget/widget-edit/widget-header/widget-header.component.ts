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
  widget = {};
  userId: String;
  webId: String;
  pageId: String;
  widgetId: String;
  widgetList = [] ;

  constructor(private widgetService: WidgetServiceClient, private router: Router, private activatedRouter: ActivatedRoute) { }

  update() {
    this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(
        (data: any) => {
          this.widget = data;
          const url = '/profile/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget';
          this.router.navigateByUrl(url);
          alert('Widget header has been updated.');
        }
    );
  }

  delete() {
    this.widgetService.deleteWidget(this.widgetId).subscribe(
        (data: any) => {
          this.widgetList = data;
          const url = '/profile/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget';
          this.router.navigateByUrl(url);
            alert('Widget header has been deleted.');
        }
    );
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe((params: any) => {
      this.userId = params.uid;
      this.webId = params.wid;
      this.pageId = params.pid;
      this.widgetId = params.wgid;
    });
    this.widgetService.findWidgetById(this.widgetId).subscribe((data: any) => {
      this.widget = data;
    });
  }
}

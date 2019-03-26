import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetServiceClient} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  widget = {};
  widgetList = [];
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;

  constructor(private widgetService: WidgetServiceClient, private router: Router, private activatedRouter: ActivatedRoute) { }

 update() {
   this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(
       (data: any) => {
         this.widget = data;
         const url = '/profile/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget';
         this.router.navigateByUrl(url);
         alert('Youtube widget has been created.');
       }
   );
 }

  delete() {
    this.widgetService.deleteWidget(this.widgetId).subscribe(
        (data: any) => {
          this.widgetList = data;
          const url = '/profile/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget';
          this.router.navigateByUrl(url);
          alert('Widget Youtube has been deleted.');
        }
    );
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe((params: any) => {
      this.userId = params.uid;
      this.websiteId = params.wid;
      this.pageId = params.pid;
      this.widgetId = params.wgid;
    });
    this.widgetService.findWidgetById(this.widgetId).subscribe(data => {
      this.widget = data;
      console.log(this.widget);
    });
  }
}

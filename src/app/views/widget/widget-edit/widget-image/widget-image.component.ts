import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetServiceClient} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  /**userId: String;
  websiteId: String;
  pageId: String;
  widget: Widget;
  widgets = [{}];*/
  widget = {};
  widgetList = [] ;
  userId: String;
  webId: String;
  pageId: String;
  widgetId: String;
  file: any;
  input: string;
  baseUrl = environment.baseUrl;

  constructor(private imageService: WidgetServiceClient, private router: Router, private activeRoute: ActivatedRoute) { }

  update() {
    this.imageService.updateWidget(this.widgetId, this.widget).subscribe(
        (data: any) => {
          this.widget = data;
          const url = '/profile/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget';
          this.router.navigateByUrl(url);
          alert('Image widget has been updated.');
        }
    );
  }

  delete() {
    this.imageService.deleteWidget(this.widgetId).subscribe(
        (data: any) => {
          this.widgetList = data;
          const url = '/profile/' + this.userId + '/website/' + this.webId + '/page/' + this.pageId + '/widget';
          this.router.navigateByUrl(url);
          alert('Widget image has been deleted.');
        }
    );
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: any) => {
      this.userId = params.uid;
      this.webId = params.wid;
      this.pageId = params.pid;
      this.widgetId = params.wgid;
    });
    this.imageService.findWidgetById(this.widgetId).subscribe((data: any) => {
      this.widget = data;
    });
  }
}

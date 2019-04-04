import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetServiceClient} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  widget: Widget;
  userId: String;
  pageId: String;
  websiteId: String;
  widgets: Widget[] = [];
  errorFlag: boolean;
  successMsg = 'Your widget has been created. You are now being routed to the edit page for your new widget. ' +
      'You may edit it or use the gray back arrow to add another widget.';
  successMsg2 = 'Your widget has been created.';

  constructor(private widgetService: WidgetServiceClient, private router: Router, private activatedRouter: ActivatedRoute) {
    this.widget = new Widget();
  }

  createHeader(widget) {
    const id = Math.floor(Math.random() * 1000);
    const widgetId = id.toString();
    const newWidget = {
      _id: widgetId,
      name: widget.name,
      pageId: this.pageId,
      widgetType: 'HEADING',
      text: widget.text,
      url: widget.url,
      size: widget.size,
      width: widget.width};
    this.widgetService.createWidget(this.pageId, newWidget).subscribe(
        (newWid: Widget) => {
          console.log(newWid);
          const url = '/profile/' + this.userId + '/website/' + this.websiteId
              + '/page/' + this.pageId + '/widget/' + newWidget._id;
          alert(this.successMsg2);
          this.router.navigateByUrl('/profile/' + this.userId + '/website/' + this.websiteId
              + '/page/' + this.pageId + '/widget/' + newWidget._id);
        }
    );
  }
  createImage(widget) {
    const id = Math.floor(Math.random() * 1000);
    const widgetId = id.toString();
    const newWidget = {
      _id: widgetId,
      name: widget.name,
      pageId: this.pageId,
      widgetType: 'IMAGE',
      text: widget.text,
      url: widget.url,
      size: widget.size,
      width: widget.width};
    this.widgetService.createWidget(this.pageId, newWidget).subscribe(
        (newWid: Widget) => {
          console.log(newWid);
          const url = '/profile/' + this.userId + '/website/' + this.websiteId
              + '/page/' + this.pageId + '/widget/' + newWidget._id;
          alert(this.successMsg2);
          this.router.navigateByUrl('/profile/' + this.userId + '/website/' + this.websiteId
              + '/page/' + this.pageId + '/widget/' + newWidget._id);
        }
    );
  }
  createHTML(widget) {
    const id = Math.floor(Math.random() * 1000);
    const widgetId = id.toString();
    const newWidget = {
      _id: widgetId,
      name: widget.name,
      pageId: this.pageId,
      widgetType: 'HTML',
      text: widget.text,
      url: widget.url,
      size: widget.size,
      width: widget.width};
    this.widgetService.createWidget(this.pageId, newWidget).subscribe(
        (newWid: Widget) => {
          console.log(newWid);
          const url = '/profile/' + this.userId + '/website/' + this.websiteId
              + '/page/' + this.pageId + '/widget/' + newWidget._id;
          alert(this.successMsg2);
          this.router.navigateByUrl('/profile/' + this.userId + '/website/' + this.websiteId
              + '/page/' + this.pageId + '/widget/' + newWidget._id);
        }
    );
  }
    createYouTube(widget) {
        const id = Math.floor(Math.random() * 1000);
        const widgetId = id.toString();
        const newWidget = {
            _id: widgetId,
            name: widget.name,
            pageId: this.pageId,
            widgetType: 'YOUTUBE',
            text: widget.text,
            url: widget.url,
            size: widget.size,
            width: widget.width};
        this.widgetService.createWidget(this.pageId, newWidget).subscribe(
            (newWid: Widget) => {
                console.log(newWid);
                const url = '/profile/' + this.userId + '/website/' + this.websiteId
                    + '/page/' + this.pageId + '/widget/' + newWidget._id;
                alert(this.successMsg2);
                this.router.navigateByUrl('/profile/' + this.userId + '/website/' + this.websiteId
                    + '/page/' + this.pageId + '/widget/' + newWidget._id);
            }
        );
    }
    createTEXT(widget) {
        const id = Math.floor(Math.random() * 1000);
        const widgetId = id.toString();
        const newWidget = {
            _id: widgetId,
            name: widget.name,
            pageId: this.pageId,
            widgetType: 'TEXT',
            text: widget.text,
            url: widget.url,
            size: widget.size,
            width: widget.width};
        this.widgetService.createWidget(this.pageId, newWidget).subscribe(
            (newWid: Widget) => {
                console.log(newWid);
                const url = '/profile/' + this.userId + '/website/' + this.websiteId
                    + '/page/' + this.pageId + '/widget/' + newWidget._id;
                alert(this.successMsg2);
                this.router.navigateByUrl('/profile/' + this.userId + '/website/' + this.websiteId
                    + '/page/' + this.pageId + '/widget/' + newWidget._id);
            }
        );
    }


  ngOnInit() {
    this.activatedRouter.params.subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
    );
    console.log(this.userId);
  }
}


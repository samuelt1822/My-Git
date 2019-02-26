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
  widgets = [{}];
  errorFlag: boolean;
  successMsg = 'Your widget has been created. You are now being routed to the edit page for your new widget. ' +
      'You may edit it or use the gray back arrow to add another widget.';

  constructor(private widgetService: WidgetServiceClient, private router: Router, private activatedRouter: ActivatedRoute) {
    this.widget = new Widget();
    console.log(this.widget);
  }

  addWidgetHeader() {
    this.widget.widgetType = 'HEADING';
    this.widget.pageId = this.pageId;
    this.widgets = this.widgetService.createWidget(this.pageId, this.widget);
    alert(this.successMsg);
    console.log(this.widget);
    console.log(this.widgets);
    const newId = this.widget._id;
    if (this.widget) {
      this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', newId]);
    } else {
      this.errorFlag = false;
    }
  }
  addWidgetImage() {
    this.widget.widgetType = 'IMAGE';
    this.widget.pageId = this.pageId;
    this.widgets = this.widgetService.createWidget(this.pageId, this.widget);
    alert(this.successMsg);
    console.log(this.widget);
    console.log(this.widgets);
    const newId = this.widget._id;
    if (this.widget) {
      this.errorFlag = true;
      this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', newId]);
    } else {
      this.errorFlag = false;
    }
  }
  addWidgetVideo() {
    this.widget.widgetType = 'YOUTUBE';
    this.widget.pageId = this.pageId;
    this.widgets = this.widgetService.createWidget(this.pageId, this.widget);
    alert(this.successMsg);
    console.log(this.widget);
    console.log(this.widgets);
    const newId = this.widget._id;
    if (this.widget) {
      this.errorFlag = true;
      this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', newId]);
    } else {
      this.errorFlag = false;
    }
  }
  addWidgetHTML() {
    this.widget.widgetType = 'HTML';
    this.widget.pageId = this.pageId;
    this.widgets = this.widgetService.createWidget(this.pageId, this.widget);
    alert(this.successMsg);
    console.log(this.widget);
    console.log(this.widgets);
    const newId = this.widget._id;
    if (this.widget) {
      this.errorFlag = true;
      this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', newId]);
    } else {
      this.errorFlag = false;
    }
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


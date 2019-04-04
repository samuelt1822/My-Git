import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetServiceClient} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
    error: string;
    alert: string;
    flag = false;
    widget = {};
    userId: string;
    websiteId: string;
    pageId: string;
    widgetId: string;
    baseUrl: string;
    public editor;


  constructor(private activatedRouter: ActivatedRoute, private widgetService: WidgetServiceClient, private router: Router) { }

    updateWidget() {

        // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
        if (this.widget['name'] === '') {
            this.flag = true;
        } else {
            this.widgetService.updateWidget(this.widgetId, this.widget)
                .subscribe(
                    (data: any) => this.router.navigate(['/profile', this.userId, 'website', this.websiteId,
                    'page', this.pageId, 'widget']),
                    (error: any) => console.log(error)
                );
        }
    }
    deleteWidget() {

        // call delete widget function from widget client service
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(
                (data: any) => this.router.navigate(['/profile', this.userId, 'website', this.websiteId,
                    'page', this.pageId, 'widget']),
                (error: any) => console.log(error)
            );

    }
  ngOnInit() {
      // initialize error and alert text
      this.error = 'Enter the name of the widget';
      this.alert = '* Enter the widget name';

      // fetch ids from current url
      this.activatedRouter.params
          .subscribe(
              (params: any) => {
                  this.websiteId = params['wid'];
                  this.pageId = params['pid'];
                  this.widgetId = params['wid'];
                  this.userId = params['uid'];
              }
          );



      // fetching current widget based on widgetId
      this.widgetService.findWidgetById(this.widgetId)
          .subscribe(
              (data: any) => {this.widget = data; },
              (error: any) => console.log(error)
          );
  }
}



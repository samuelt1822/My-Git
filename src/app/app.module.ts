import {BrowserModule, SafeUrl} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/user/login/login.component';
import { ProfileComponent } from './views/user/profile/profile.component';
import { RegisterComponent } from './views/user/register/register.component';
import { WebsiteNewComponent } from './views/website/website-new/website-new.component';
import { WebsiteEditComponent } from './views/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './views/website/website-list/website-list.component';
import { PageNewComponent } from './views/pages/page-new/page-new.component';
import { PageEditComponent } from './views/pages/page-edit/page-edit.component';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { WidgetChooserComponent } from './views/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './views/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './views/widget/widget-list/widget-list.component';
import { WidgetHeaderComponent } from './views/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './views/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './views/widget/widget-edit/widget-youtube/widget-youtube.component';

import {UserServiceClient} from './services/user.service.client';
import {WebsiteServiceClient} from './services/website.service.client';
import {PageServiceClient} from './services/page.service.client';
import {WidgetServiceClient} from './services/widget.service.client';
import {SharedService} from './services/shared.service';
import {SafePipe} from './safe.pipe';
import {HttpClientModule} from '@angular/common/http';

import {SortableDirective} from './views/widget/widget-list/sortable.directive';
import { WidgetHtmlComponent } from './views/widget/widget-edit/widget-html/widget-html.component';
import {QuillEditorModule} from 'ngx-quill-editor';
import { WidgetTextComponent } from './views/widget/widget-edit/widget-text/widget-text.component';
import {AuthGuard} from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    PageNewComponent,
    PageEditComponent,
    PageListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    SafePipe,
    SortableDirective,
    WidgetHtmlComponent,
    WidgetTextComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    QuillEditorModule
  ],
  providers: [UserServiceClient, WebsiteServiceClient, PageServiceClient, WidgetServiceClient, SharedService, AuthGuard],
  bootstrap: [AppComponent] /**add a line here for the cannot get*/
})
export class AppModule { }

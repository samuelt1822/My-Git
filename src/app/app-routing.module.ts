import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/user/login/login.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {RegisterComponent} from './views/user/register/register.component';
import {PageNewComponent} from './views/pages/page-new/page-new.component';
import {PageListComponent} from './views/pages/page-list/page-list.component';
import {PageEditComponent} from './views/pages/page-edit/page-edit.component';
import {WebsiteNewComponent} from './views/website/website-new/website-new.component';
import {WebsiteListComponent} from './views/website/website-list/website-list.component';
import {WebsiteEditComponent} from './views/website/website-edit/website-edit.component';
import {WidgetChooserComponent} from './views/widget/widget-chooser/widget-chooser.component';
import {WidgetListComponent} from './views/widget/widget-list/widget-list.component';
import {WidgetEditComponent} from './views/widget/widget-edit/widget-edit.component';
import {WidgetHeaderComponent} from './views/widget/widget-edit/widget-header/widget-header.component';
import {WidgetImageComponent} from './views/widget/widget-edit/widget-image/widget-image.component';
import {WidgetYoutubeComponent} from './views/widget/widget-edit/widget-youtube/widget-youtube.component';
import {WidgetHtmlComponent} from './views/widget/widget-edit/widget-html/widget-html.component';
import {WidgetTextComponent} from './views/widget/widget-edit/widget-text/widget-text.component';
import {AuthGuard} from './services/auth-guard.service';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    /**{path: 'profile/:uid', component: ProfileComponent, canActivate: [AuthGuard]},*/
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'profile/:uid/website', component: WebsiteListComponent, canActivate: [AuthGuard]},
    {path: 'profile/:uid/website/new', component: WebsiteNewComponent, canActivate: [AuthGuard]},
    {path: 'profile/:uid/website/:wid', component: WebsiteEditComponent, canActivate: [AuthGuard]},
    {path: 'profile/:uid/website/:wid/page', component: PageListComponent, canActivate: [AuthGuard]},
    {path: 'profile/:uid/website/:wid/page/new', component: PageNewComponent, canActivate: [AuthGuard]},
    {path: 'profile/:uid/website/:wid/page/:pid', component: PageEditComponent, canActivate: [AuthGuard]},
    {path: 'profile/:uid/website/:wid/page/:pid/widget', component: WidgetListComponent, canActivate: [AuthGuard]},
    {path: 'profile/:uid/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent, canActivate: [AuthGuard]},
    {path: 'profile/:uid/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent, canActivate: [AuthGuard]},
    {path: 'profile/:uid/website/:wid/page/:pid/widget/:wgid/:header', component: WidgetHeaderComponent, canActivate: [AuthGuard]},
    {path: 'profile/:uid/website/:wid/page/:pid/widget/:wgid/:image', component: WidgetImageComponent, canActivate: [AuthGuard]},
    {path: 'profile/:uid/website/:wid/page/:pid/widget/:wgid/:youtube', component: WidgetYoutubeComponent, canActivate: [AuthGuard]},
    {path: 'profile/:uid/website/:wid/page/:pid/widget/:wgid/:html', component: WidgetHtmlComponent, canActivate: [AuthGuard]},
    {path: 'profile/:uid/website/:wid/page/:pid/widget/:wgid/:text', component: WidgetTextComponent, canActivate: [AuthGuard]}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

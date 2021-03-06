import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/user/login/login.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {RegisterComponent} from './views/user/register/register.component';
import {WebsiteListComponent} from './views/website/website-list/website-list.component';
import {WebsiteNewComponent} from './views/website/website-new/website-new.component';
import {WebsiteEditComponent} from './views/website/website-edit/website-edit.component';
import {PageListComponent} from './views/page/page-list/page-list.component';
import {PageNewComponent} from './views/page/page-new/page-new.component';
import {PageEditComponent} from './views/page/page-edit/page-edit.component';
import {WidgetListComponent} from './views/widget/widget-list/widget-list.component';
import {WidgetChooserComponent} from './views/widget/widget-chooser/widget-chooser.component';
import {HeadingComponent} from './views/widget/widget-edit/heading/heading.component';
import {ImageComponent} from './views/widget/widget-edit/image/image.component';
import {YoutubeComponent} from './views/widget/widget-edit/youtube/youtube.component';
import {WidgetEditComponent} from './views/widget/widget-edit/widget-edit.component';
import {FlickrImageSearchComponent} from './views/widget/widget-edit/image/flickr-image-search/flickr-image-search.component';
import {HtmlComponent} from './views/widget/widget-edit/html/html.component';
import {TextComponent} from './views/widget/widget-edit/text/text.component';
import {AuthGuard} from './service/auth-guard.service.client';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'user/website', component: WebsiteListComponent},
  {path: 'user/:uid/website/new', component: WebsiteNewComponent},
  {path: 'user/:uid/website/:wid', component: WebsiteEditComponent},
  {path: 'user/:uid/website/:wid/page', component: PageListComponent},
  {path: 'user/:uid/website/:wid/page/new', component: PageNewComponent},
  {path: 'user/:uid/website/:wid/page/:pid', component: PageEditComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget', component: WidgetListComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/:header', component: HeadingComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/:image', component: ImageComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/:youtube', component: YoutubeComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/:html', component: HtmlComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/:text', component: TextComponent},
  {path: 'user/website/:wid/page/:pid/widget/:wgid/flickr', component: FlickrImageSearchComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes, {useHash: true});



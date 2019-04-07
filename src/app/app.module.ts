import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {routing} from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/user/login/login.component';
import { ProfileComponent } from './views/user/profile/profile.component';
import { RegisterComponent } from './views/user/register/register.component';
import { WebsiteListComponent } from './views/website/website-list/website-list.component';
import { WebsiteNewComponent } from './views/website/website-new/website-new.component';
import { WebsiteEditComponent } from './views/website/website-edit/website-edit.component';
import { PageListComponent } from './views/page/page-list/page-list.component';
import { PageNewComponent } from './views/page/page-new/page-new.component';
import { PageEditComponent } from './views/page/page-edit/page-edit.component';
import { WidgetListComponent } from './views/widget/widget-list/widget-list.component';
import { WidgetChooserComponent } from './views/widget/widget-chooser/widget-chooser.component';
import {UserService} from './service/user.service.client';
import {WebsiteService} from './service/website.service.client';
import { HeadingComponent } from './views/widget/widget-edit/heading/heading.component';
import { ImageComponent } from './views/widget/widget-edit/image/image.component';
import { YoutubeComponent } from './views/widget/widget-edit/youtube/youtube.component';
import {HttpClientModule} from '@angular/common/http';
import {WidgetService} from './service/widget.service.client';
import {PageService} from './service/page.service.client';
import { WidgetEditComponent } from './views/widget/widget-edit/widget-edit.component';
import { SortableDirective } from './views/widget/widget-list/sortable.directive';
import {OrderByPipe} from './views/widget/widget-list/order-by-pipe.pipe';
import {SafePipe} from './views/widget/widget-list/safe-pipe.pipe';
import { QuillEditorModule } from 'ngx-quill-editor';
//import {QuillModule} from 'ngx-quill';
import { HtmlComponent } from './views/widget/widget-edit/html/html.component';
import { TextComponent } from './views/widget/widget-edit/text/text.component';
import { FlickrImageSearchComponent } from './views/widget/widget-edit/image/flickr-image-search/flickr-image-search.component';
import {FlickrService} from './service/flickr.service.client';
// import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {SharedService} from './service/shared.service';
import {AuthGuard} from './service/auth-guard.service.client';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteListComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    PageListComponent,
    PageNewComponent,
    PageEditComponent,
    WidgetListComponent,
    WidgetChooserComponent,
    HeadingComponent,
    ImageComponent,
    YoutubeComponent,
    WidgetEditComponent,
    SortableDirective,
    OrderByPipe,
    SafePipe,
    HtmlComponent,
    TextComponent,
    FlickrImageSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    routing,
    //QuillModule,
    QuillEditorModule
  ],
  providers: [UserService, WebsiteService, WidgetService, PageService, FlickrService, SharedService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

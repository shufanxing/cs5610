import { Component, OnInit } from '@angular/core';
import {FlickrService} from '../../../../../service/flickr.service.client';
import {WidgetService} from '../../../../../service/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../../service/shared.service';
import {WebsiteService} from '../../../../../service/website.service.client';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  websiteId: string;
  pageId: string;
  userId: string;
  widgetId: string;
  photos: [any];
  error: string;
  searchText: string;

  constructor(private _http: HttpClient, private flickrService: FlickrService, private widgetService: WidgetService,
              private router: Router, private activatedRoute: ActivatedRoute, private websiteService: WebsiteService) { }

  ngOnInit() {

    // fetch userId from shared service
    // this.userId = this.sharedService.user['_id'];

    // fetch userId, pageId and websiteId from url
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
        }
      );
    this.websiteService.findWebsiteById(this.websiteId).subscribe(
      (data: any) => {
        this.userId = data['developerId'];
      }
    );
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: string) => {
          console.log('I got a lot of ppictures wanted');

          // const val: string;
          let val = data;
          val = val.substring(14, val.length - 1);
          console.log(val);
          const allPhotos = JSON.parse(val);
          console.log(allPhotos.photos);
          this.photos = allPhotos.photos;
        }
      );
  }



  // searchPhotos(searchTerm: any) {
  //   const key = '90ea0df0685933f65ea96fab852a3023';
  //   const secret = '59b7fb7ceb0a467b';
  //   const urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
  //
  //   console.log('I am searching photos in flicker' + urlBase);
  //   const url = urlBase
  //     .replace('API_KEY', key)
  //     .replace('TEXT', searchTerm);
  //   const dataOfPhoto =  this._http.get(url, {responseType: 'text'}).subscribe(
  //     (data: string) => {
  //       let val = data;
  //       console.log(val);
  //       val = val.replace('jsonFlickrApi(', '');
  //       val = val.substring(0, val.length - 1);
  //       return val;
  //     }
  //   );
  //   this.photos = JSON.parse(dataOfPhoto['body']);
  // }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';

    console.log('flickr: ' + url);

    const widget = {
      websiteId : this.websiteId,
      pageId : this.pageId,
      url: url
    };

    this.widgetService
      .updateWidget(this.widgetId, widget)
      .subscribe(
        (data: any) => {
          const result = data;
          if (result) {
            this.router.navigate(['/user/' + '/website/'
          + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widgetId] );
          } else {
            this.error = 'failed!';
          }
        }
      );
  }

}

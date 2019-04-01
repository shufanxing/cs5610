import {Injectable} from '@angular/core';
import {Page} from '../models/page.model.client';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../environments/environment';
//import {environment} from '../../environments/environment.prod';


@Injectable()
export class PageService {
  // pages: Page[] = [
  //   new Page ('321', 'Post 1', '890', 'Lorem'),
  //   new Page ('432', 'Post 2', '890', 'Lorem'),
  //   new Page ( '543', 'Post 3', '890', 'Lorem'),
  //   new Page ('678', 'Post 1', '678', 'Lorem'),
  //   new Page ('7789', 'Post 2', '678', 'Lorem'),
  //   new Page ( '3456', 'Post 3', '678', 'Lorem')
  // ];
  constructor(private http: HttpClient) {}
  baseUrl = environment.baseUrl;

  createPage(websiteId: String, page: Page) {
    const curpage = {name: page.name, websiteId: page.websiteId, description: page.description };
     return this.http.post(this.baseUrl + '/api/website/' + websiteId + '/page', curpage );
  }

  findPageByWebsiteId2(websiteId: String) {
    return this.http.get(this.baseUrl + '/api/website/' + websiteId + '/page');
    // return this.pages.filter(function (page) {
    //   return page.websiteId === websiteId;
    // });
  }

  findPageById(pageId: String) {
    return this.http.get(this.baseUrl + '/api/page/' + pageId);
  }

  updatePage(pageId: String, page: any) {
    const curpage = {_id: page['_id'], name: page['name'], websiteId: page['websiteId'], description: page['description']};
    return  this.http.put(this.baseUrl + '/api/page/' + pageId, curpage);
  }

  deletePage(pageId: String) {
    return this.http.delete(this.baseUrl + '/api/page/' + pageId);
  }
}

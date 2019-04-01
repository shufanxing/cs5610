import { Website} from '../models/website.model.client';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {User} from '../models/user.model.client';
import {environment} from '../../environments/environment';
//import {environment} from '../../environments/environment.prod';


@Injectable()
export class WebsiteService {
  // websites: Website[] = [
  //   new Website('123', 'Facebook', '456', 'Lorem'),
  //   new Website('234', 'Tweeter', '456', 'Lorem'),
  //   new Website('456', 'Gizmodo', '456', 'Lorem'),
  //   new Website('890', 'Go', '123', 'Lorem'),
  //   new Website('567', 'Tic Tac Toe', '123', 'Lorem'),
  //   new Website('678', 'Checkers', '123', 'Lorem'),
  //   new Website('789', 'Chess', '234', 'Lorem')
  // ];

  constructor(private http: HttpClient) {}
  baseUrl = environment.baseUrl;
  createWebsite(userId: String, website: Website) {
    const web = { name: website.name, developerId: website.developerId, description: website.description};
    return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', web);
  }

  findWebsitesByUser(userId: String) {
    return this.http.get(this.baseUrl + '/api/user/' + userId + '/website');
  }

  findWebsiteById(websiteId: String) {
    return this.http.get(this.baseUrl + '/api/website/' + websiteId);
  }

  updateWebsite(websiteId: String, website: any) {
    const web = {_id: website._id, name: website.name, developerId: website.developerId, description: website.description};
    return this.http.put(this.baseUrl + '/api/website/' + websiteId, web);
  }

  deleteWebsite(websiteId: String) {
    return this.http.delete(this.baseUrl + '/api/website/' + websiteId);
  }
}

import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import {environment} from '../../environments/environment';
import {environment} from '../../environments/environment.prod';
import {Http, RequestOptions, Response} from '@angular/http';
import {SharedService} from './shared.service';
import {Router} from '@angular/router';

@Injectable()
export class UserService {
  // users: User[] = [
  //   new User('123', 'alice', 'qq'),
  //   new User('234', 'bob', 'qq'),
  //   new User('345', 'charlie', 'qq')
  // ];

  // users = [
  //   {id: "111", username: "hunter", password: "hunter", firstname: "h" }
  // ]

  options = new RequestOptions();
  apiHeader = new HttpHeaders();

  constructor(private http: HttpClient, private router: Router, private sharedService: SharedService ) {}
  baseUrl = environment.baseUrl;

  createUser(user: any) {
    const userbody = { username: user.username, password: user.password };
    return this.http.post(this.baseUrl + '/api/user', userbody);
  }

  logOut() {
    this.options.withCredentials = true;
    this.sharedService.user = '';
    return this.http.post(this.baseUrl + '/api/logout', '', { headers: this.apiHeader, withCredentials: true });
  }

  login(username: String, password: String) {
    this.options.withCredentials = true;
    const body = {
      username: username,
      password: password
    }
    return this.http.post(this.baseUrl + '/api/login', body, { headers: this.apiHeader, withCredentials: true });
  }

  register(username: String, password: String) {
    this.options.withCredentials = true;
    const user = {
      username: username,
      password: password
    };
    return this.http.post(this.baseUrl + '/api/register', user, { headers: this.apiHeader, withCredentials: true });
  }


  loggedin() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedin', '', { headers: this.apiHeader, withCredentials: true }).
    map(
      (user: any) => {
        if (user !== 0) {
          this.sharedService.user = user;
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }
    );
  }

  findUserById(userId: String) {
    return this.http.get(this.baseUrl + '/api/user/' + userId);
  }

  findUserByName(username: String) {
    return this.http.get(this.baseUrl + '/api/username?username=' + username);
  }

  updateUser(user: any) {
    const url =  this.baseUrl + '/api/user/' + user._id;
    return this.http.put(url, user);
  }

  deleteUserById(userId: String) {
    const url =  this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url);
  }
}

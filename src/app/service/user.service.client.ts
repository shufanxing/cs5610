import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../environments/environment';
//import {environment} from '../../environments/environment.prod';


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

  constructor(private http: HttpClient) {}
  baseUrl = environment.baseUrl;

  createUser(user: any) {
    const userbody = { username: user.username, password: user.password };
    return this.http.post(this.baseUrl + '/api/user', userbody);
  }

  findUserByCredential(username: String, password: String) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
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

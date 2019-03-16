import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserService {
  users: User[] = [
    new User('123', 'alice', 'qq'),
    new User('234', 'bob', 'qq'),
    new User('345', 'charlie', 'qq')
  ];

  // users = [
  //   {id: "111", username: "hunter", password: "hunter", firstname: "h" }
  // ]

  constructor(private http: HttpClient) {}

  createUser(user: User) {
    const userbody = {_id: '', username: user.username, password: user.password };
    return this.http.post('http://localhost:3200/api/user', userbody);
  }

  findUserByCredential(username: String, password: String) {
    return this.http.get('http://localhost:3200/api/user?username=' + username + '&password=' + password);
  }

  findUserById(userId: String) {
    return this.http.get('http://localhost:3200/api/user/' + userId);
  }
   getUserList() {
     return this.users;
   }
  findUserByName(username: String) {
    return this.http.get('http://localhost:3200/api/username?username=' + username);
  }

  updateUser(user: any) {
    const url =  'http://localhost:3200/api/user/' + user._id;
    return this.http.put(url, user);
  }

  deleteUserById(userId: String) {
    const url =  'http://localhost:3200/api/user/' + userId;
    return this.http.delete(url);
  }
}

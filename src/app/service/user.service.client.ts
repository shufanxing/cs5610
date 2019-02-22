import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';


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

  createUser(user: User) {
    user._id = Math.floor(Math.random() * 1000).toString();
    this.users.push(new User(user._id, user.username, user.password));
  }

  findUserByCredential(username: String, password: String) {
    return this.users.find( function (user) {
      return user.username === username && user.password === password;
    });
  }

  findUserById(userId: String) {
    for ( let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        return this.users[x];
      }
    }
  }
   getUserList() {
     return this.users;
   }
  findUserByName(username: String) {
    for ( let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {
        return this.users[x];
      }
    }
  }

  updateUser(user: User) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === user._id) {
        this.users[i].firstname = user.firstname;
        this.users[i].lastname = user.lastname;
        this.users[i].email = user.email;
        return this.users[i];
      }
    }
  }

  deleteUserById(userId: String) {
    for (const i in this.users) {
      if (this.users[i]._id === userId) {
        const j = +i;
        this.users.splice(j, 1);
      }
    }
  }
}

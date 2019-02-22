import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../service/user.service.client';
import {NgForm} from '@angular/forms';



// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//   @ViewChild('fp') myProfileForm: NgForm;
//     userId: String;
//     username: String;
//     firstname: String;
//     lastname: String;
//     email: String;
//     user: User;
//   constructor(
//     private userService: UserService,
//     private route: ActivatedRoute) { this.route.params.subscribe((params: any) => {this.userId = params.uid; });
//     this.user = this.userService.findUserById(this.userId); }
//
//   updateUser() {
//     this.firstname = this.myProfileForm.value.firstname;
//     this.lastname = this.myProfileForm.value.lastname;
//     this.email = this.myProfileForm.value.email;
//     console.log(this.user._id);
//     console.log(this.user.username);
//     console.log(this.firstname);
//     console.log(this.lastname);
//     const cur_user: User = new User(this.user._id, this.user.username, this.user.password,
//       String(this.firstname), String(this.lastname), String(this.email));
//     this.user = this.userService.updateUser(cur_user);
//   }
//
//   ngOnInit() {
//     this.route.params.subscribe((params: any) => {this.userId = params.uid; });
//     this.user = this.userService.findUserById(this.userId);
//     this.username = this.user.username;
//   }
// }

//
// import { Component, OnInit } from '@angular/core';
// import {ActivatedRoute} from '@angular/router';

// export class User {
//   _id: String;
//   username: String;
//   password: String;
//
//   firstName: String;
//   lastName: String;
//   email: String;
//
//   constructor(_id, username, password, firstName, lastName, email) {
//     this._id = _id;
//     this.username = username;
//     this.password = password;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//   }
//
// }

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: String;
  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    //this.user = this.userService.findUserById(this.userId);
    // console.log(this.user.username);
    // console.log(this.user.password);
  }

  updateUser() {
    console.log(this.user.username);
    console.log(this.user.firstname);
    console.log(this.user.lastname);
    // const cur_user: User = new User(this.user._id, this.user.username, this.user.password,
    //   String(this.firstname), String(this.lastname), String(this.email));
    this.user = this.userService.updateUser(this.user);
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {this.userId = params.uid; });
    this.user = this.userService.findUserById(this.userId);
    console.log('user id: ' + this.userId);
    console.log('user name' + this.user.username);
  }
}


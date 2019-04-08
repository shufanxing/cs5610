import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import {UserService} from '../../../service/user.service.client';
import {User} from '../../../models/user.model.client';

import {NgForm} from '@angular/forms';
import { ViewChild } from '@angular/core';
import {SharedService} from '../../../service/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') myloginForm: NgForm;
  username: String; // see usage as two-way data binding
  password: String; // see usage as two-way data binding
  //user: User = null;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) {
    this.username = 'hello world!';
  }


  login() {
    this.username = this.myloginForm.value.username;
    this.password = this.myloginForm.value.password;
    console.log('data', this.username);
    this.errorFlag = false;
    this.userService.login(this.username, this.password)
      .subscribe((user: any) => {
        //this.user = user;
          if (user) {
            console.log(user);
            this.sharedService.user = user;
            this.router.navigate(['/profile']);
            //this.router.navigate(['/user', user._id]);
          } else {
            this.errorFlag = true;
          }
        },
        (error: any) => {
         this.errorFlag = true;
         console.log(error);
        }
      );
  }





  ngOnInit() {
    // this.users = UserService.getAllUser();
    console.log('login page!' + this.username);
    //console.log(this.userService.users);
  }

}



import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../service/user.service.client';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('fr') myRegisterForm: NgForm;
    username: string;
    password: string;
    v_password: string;
    noName: boolean;
  errorFlag1: boolean;
  errorFlag2: boolean;
  errorMsg1 = 'Password mis-matching!';
  errorMsg2 = 'This username has been used, please enter another username!';
  errorMsg = 'Please enter a user name';


  constructor(private userService: UserService, private router: Router) { }

  register() {
    console.log('I am here to register a new user');
    this.username = this.myRegisterForm.value.username;
    this.password = this.myRegisterForm.value.password;
    this.v_password = this.myRegisterForm.value.v_password;
    this.errorFlag1 = false;
    this.errorFlag2 = false;
    this.noName = false;
    if (this.v_password !== this.password) {
      this.errorFlag1 = true;
      return;
    }
    if (this.username === '' || this.username === null) {
      this.noName = true;
      return;
    }
    this.userService.register(this.username, this.password).subscribe(
      (data: any) => {
        this.router.navigate(['/profile']);
      },
      (err: any) => {
        this.errorFlag2 = true;
      }
    );
  }

  ngOnInit() {

  }

}

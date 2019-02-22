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
    username: String;
    password: String;
    v_password: String;
  // v_password: String;
  errorFlag1: boolean;
  errorFlag2: boolean;
  errorMsg1 = 'Password mis-matching!';
  errorMsg2 = 'This username has been used, please enter another username!';


  constructor(private userService: UserService, private router: Router) { }

  register() {
    this.username = this.myRegisterForm.value.username;
    this.password = this.myRegisterForm.value.password;
    this.v_password = this.myRegisterForm.value.v_password;
    this.errorFlag1 = false;
    this.errorFlag2 = false;
    if ( this.v_password === this.password && !this.userService.findUserByName(this.username)) {
      const user: User = new User('', this.username, this.password);
      this.userService.createUser(user);
      alert('Registration succeed!');
      this.router.navigate(['/', 'login']);

    } else if (this.userService.findUserByName(this.username)) {
      this.errorFlag2 = true;
    } else {
      this.errorFlag1 = true;
    }
  }

  ngOnInit() {

  }

}

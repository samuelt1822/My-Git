import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceClient } from '../../../services/user.service.client';
import { Router } from '@angular/router';
import {User} from '../../../models/user.model.client';
import 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String;
  password: String;
  errorMsg = 'Invalid username or password!';
  errorFlag: boolean;

  constructor(private userService: UserServiceClient, private router: Router) {
    this.username = 'test';
  }
  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    const user: User = this.userService.findUserByCredential(this.username, this.password);
    if (user) {
      this.router.navigate(['/profile', user._id]);
    } else {
      this.errorFlag = true;
    }
  }

  ngOnInit() {
    console.log('login page!' + this.username);
  }
}


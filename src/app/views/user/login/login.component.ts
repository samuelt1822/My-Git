import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceClient } from '../../../services/user.service.client';
import { Router } from '@angular/router';
import {User} from '../../../models/user.model.client';
import 'rxjs';
import {SharedService} from '../../../services/shared.service';

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

  constructor(private userService: UserServiceClient, private router: Router,
              private sharedService: SharedService) {
  }

    login() {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;


        this.errorFlag = false;
        this.userService.login(this.username, this.password)
            .subscribe((user: any) => { /**added the any on this line instead of User*/
                    if (user) {
                        /**Class additions - we will now be using cached info and won't be displaying user id anymore*/
                        this.sharedService.user = user;
                        // this.router.navigate(['profile']);
                        this.router.navigate(['/profile', user._id]);
                    } else {
                        this.errorFlag = true;
                    }
                }
            );
    }

  ngOnInit() {
    console.log('login page!' + this.username);
  }
}


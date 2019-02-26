import {Component, OnInit, ViewChild} from '@angular/core';
import {UserServiceClient} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {Router} from '@angular/router';
import 'rxjs';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  user: User;
  errorFlag: boolean;
  errorMsg = 'Password and verified password do not match!';
  v_password: String;

  constructor(private userService: UserServiceClient, private router: Router) {
    this.user = new User();
    console.log(this.user);
  }
  register(v_password: String) {
    this.user.username = this.registerForm.value.username;
    console.log(this.user.username);
    this.user.password = this.registerForm.value.password;
    this.v_password = this.registerForm.value.v_password;

    if (v_password === this.user.password) {
      this.errorFlag = false;
      this.userService.createUser(this.user);
      console.log(this.user);
      console.log(this.userService.users);
      if (this.user) {
        this.router.navigate(['/login']);
      }
    } else {
      this.errorFlag = true;
    }
  }
  ngOnInit() {
  }

}

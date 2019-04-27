import {Component, OnInit, ViewChild} from '@angular/core';
import {UserServiceClient} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {Router} from '@angular/router';
import 'rxjs';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';


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

  constructor(private userService: UserServiceClient, private router: Router, private sharedService: SharedService) {
    this.user = new User();
    console.log(this.user);
  }
  register() {
    this.user.username = this.registerForm.value.username;
    console.log(this.user.username);
    this.user.password = this.registerForm.value.password;
    this.v_password = this.registerForm.value.v_password;
    if (this.user.password !== this.v_password) {
      this.errorFlag = true;
    } else {
      this.userService.register(this.user.username, this.user.password)
          .subscribe((data: any) => {
        alert('User registered');
        this.sharedService.user = data;
        this.router.navigate(['/profile']);
      }, (error: any) => {
            console.log('error' + error);
          });
    }
  }
  ngOnInit() {
  }

}

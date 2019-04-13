import {Component, OnInit, ViewChild} from '@angular/core';
import { UserServiceClient } from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import 'rxjs';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {};
  /**all below added for A4*/
  username: String;
  firstName: String;
  lastName: String;
  email: String;
  user2 = {};
  userId: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password.';
  constructor(private userService: UserServiceClient, private activatedRoute: ActivatedRoute,
              private router: Router, private sharedService: SharedService) { }

  updateUser() {
      this.userService.updateUser(this.userId, this.user).subscribe(
          (data: any) => {
              this.user = data;
              console.log(this.user);
          },
          (error: any) => {
              alert('update failed!');
          }
      );
  }

    deleteUser(deleteUser) {
        return this.userService.deleteUserById(deleteUser._id).subscribe(
            () => this.router.navigate(['/login'])
        );
    }
    logout() {
        return this.userService.logout().subscribe((data: any) => {
                this.router.navigate(['/login']);
            }
        );
    }
  ngOnInit() {
      this.userId = this.sharedService.user['_id'];
      return this.userService.findUserById(this.userId).subscribe(
          (user: User) => {
          this.user = user;
          }
      );
      /**this.activatedRoute.params.subscribe((params: any) => {this.userId = params.uid; });
      console.log(this.userId);
      this.userService.findUserById(this.userId)
          .subscribe((data: any) => {
              console.log(data);
              this.user = data;
          });*/
  }
}


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
  user: User = new User('', '', '', '', '', '');
  /**all below added for A4*/
  username: String;
  email: String;
  userId: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password.';
  constructor(private userService: UserServiceClient, private activatedRoute: ActivatedRoute,
              private router: Router, private sharedService: SharedService) { }

  updateUser() {
      this.userService.updateUser(this.user._id, this.user)
          .subscribe(
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
            this.sharedService.user = null;
            }
        );
    }
  ngOnInit() {
      this.user = this.sharedService.user;
  }
}


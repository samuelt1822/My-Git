import {Component, OnInit, ViewChild} from '@angular/core';
import { UserServiceClient } from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {ActivatedRoute} from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(private userService: UserServiceClient, private activatedRoute: ActivatedRoute) { }

  updateUser(user) {
    console.log(user);
    this.user = this.userService.updateUser(user);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
              this.user = this.userService.findUserById(params['uid']);
            });
  }
}

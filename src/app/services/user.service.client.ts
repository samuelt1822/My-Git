import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs-compat/add/operator/map';
import {Observable} from 'rxjs';
import {SharedService} from './shared.service';
import {Router} from '@angular/router';


@Injectable()


export class UserServiceClient {
    constructor(private http: HttpClient, private sharedService: SharedService,
                private router: Router) {}

    baseUrl = environment.baseUrl;

    /*createUser(user: any) {
        const body = {_id: '', username: user.username, password: user.password };
        return this.http.post(this.baseUrl + '/api/user', body);
    }*/
    createUser(user: User) {
        const url = this.baseUrl + '/api/user/';
        return this.http.post(url, user);
    }

    findUserById(userId: String) {
        return this.http.get(this.baseUrl + '/api/user/' + userId);
    }
    findUserByUsername(username: String) {
        return this.http.get(this.baseUrl + '/api/username?username=' + username);
    }
    updateUser(userId: String, user: any) {
        return this.http.put(this.baseUrl + '/api/user/' + userId, user);
    }

    findUserByCredentials(username: String, password: String) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
    }

    deleteUserById(userId: String) {
        return this.http.delete(this.baseUrl + '/api/user' + userId);
    }
    login(username: String, password: String) {
        const body = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/login', body, {withCredentials: true});
    }

    logout() {
        return this.http.post(this.baseUrl + '/api/logout', '', { withCredentials: true });
    }

    loggedIn() {
        return this.http.post(this.baseUrl + '/api/loggedIn', '', {withCredentials: true})
            .map(
                (user: any) => {
                    if (user !== 0) {
                        this.sharedService.user = user; // setting user to share with components
                        return true;
                    } else {
                        this.router.navigate(['/login']);
                        return false;
                    }
                }
            );
    }
    register(username: String, password: String) {
        const body = {
            username : username,
            password : password
        };
        return this.http.post(this.baseUrl + '/api/register', body, { withCredentials: true })
            .map((res: any) => {
            const data = res;
            return data;
        });
    }

}


import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs-compat/add/operator/map';
import {Observable} from 'rxjs';


@Injectable()


export class UserServiceClient {
    constructor(private http: HttpClient) {}

    baseUrl = environment.baseUrl;

    createUser(user: User) {
        const body = {_id: '', username: user.username, password: user.password };
        return this.http.post(this.baseUrl + '/api/user', body);
    }
    findUserById(userId: String) {
        return this.http.get(this.baseUrl + '/api/user/' + userId);
    }
    findUserByUsername(username: String) {
        return this.http.get(this.baseUrl + '/api/username?username=' + username);
    }
    updateUser(user: any) {
        return this.http.put(this.baseUrl + '/api/user/' + user._id, user);
    }

    findUserByCredentials(username: String, password: String) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
    }

    deleteUserById(userId: String) {
        return this.http.delete(this.baseUrl + '/api/user' + userId);
    }

}


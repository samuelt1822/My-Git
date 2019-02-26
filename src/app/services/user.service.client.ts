import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';


@Injectable()


export class UserServiceClient {
    constructor() {}

    users: User[] = [
        new User ('123', 'alice', 'pass1', 'Alice', 'Wonder', 'alice@gmail.com'),
        new User ('234', 'bob', 'pass2', 'Bob', 'Marley', 'bob@gmail.com'),
        new User ('345', 'charlie', 'pass3', 'Charlie', 'Moore', 'charlie@gmail.com'),
        new User ('456', 'jannuzi', 'pass4', 'Jannuzi', 'Saunders', 'jannuzi@gmail.com')];

    /** Add delete function */
    createUser(user: User) {
        const id = Math.floor(Math.random() * 1000);
        user._id = id.toString();
        this.users.push(new User(user._id, user.username, user.password, user.firstName, user.lastName, user.email));
        return user;
    }
    findUserById(userId: String) {
        return this.users.find( function (user) {
            return user._id === userId;
        });
    }
    findUserByCredential(username: String, password: String) {
        return this.users.find( function (user) {
            return user.username === username && user.password === password;
        });
    }
    updateUser(user: User) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i]._id === user._id) {
                return this.users[i] = user;
            }
        }
    }
}


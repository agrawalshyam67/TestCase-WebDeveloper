import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // Shared Service for Interactions between Independent Components

  user: User;
  users: User[];
  constructor() { }

  setUser(user) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  setUsers(users) {
    this.users = users;
  }

  getUsers() {
    return this.users;
  }
}

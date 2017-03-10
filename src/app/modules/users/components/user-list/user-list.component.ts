import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

import { User } from '../../../../models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(
    private _router: Router,
    private _usersService: UsersService
  ) { }

  /*
  getUsers(): void {
    this._usersService.getUsers()
      .subscribe(
        users => {
          console.log(users);
          this.users = users;
          console.log('----------------------------------------');
        },
        error =>  {
          console.log('errooooooooooooooooooooooooo');
          console.log(error);
        }
      );
  }
   */

  getUsers(): void {
    this._usersService.getUsers()
      .then(users => {
        this.users = users;
    });
  }

  ngOnInit() {
    this.getUsers()
  }
}

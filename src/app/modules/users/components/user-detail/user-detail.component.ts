import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router'; // borrar params
import { Location } from '@angular/common';

import { UsersService } from '../../services/users.service';

import { User } from '../../../../models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  message: string;

  /**
   * [constructor description]
   * @param {ProductosService} private _productoService [description]
   * @param {ActivatedRoute}   private _route           [description]
   * @param {Location}         private _location        [description]
   */
  constructor(
    private _location: Location,
    private _usersService: UsersService,
    private _route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getUser();
  }

  /**
   * Get Producto
   * 
   * @return void
   */
  getUser(){
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._usersService.getUser(id)
          .then(
            res => {
              console.log('UserDetailComponent.getUser()');
              console.log('--------------------------');
              console.log('--------------------------');
              console.log(res);
              this.user = res;
            }, 
            err => {
              this.message = err;
              console.log(err);
            }, 
          )
      });
  }

  /**
   * Go Back navigation
   * 
   * @return void
   */  
  goBack(): void {
    this._location.back();
  }  
}

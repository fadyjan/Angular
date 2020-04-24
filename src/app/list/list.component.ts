import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public users = []

  

  constructor(private _usersService :UsersService) { }

  ngOnInit(): void {
    this.users = this._usersService.getUsers();
    console.log(this.users);

  }

}

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { NgModel, NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public users = []  

  constructor(private _usersService :UsersService) { 
    
  }

  ngOnInit(): void {
    this.users = this._usersService.getUsers();
  }


  onSubmit(userForm :NgForm){

    this._usersService.onSubmit(userForm.value)
    
    

  }

}



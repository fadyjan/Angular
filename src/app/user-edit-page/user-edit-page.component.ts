import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']
})
export class UserEditPageComponent implements OnInit {

  public users = []
  public id 
  public fname
  public age 
  public email


  constructor(private _usersService: UsersService, private activatedRoute: ActivatedRoute) {

    this.id =this.activatedRoute.snapshot.paramMap.get('id')
    console.log(this.id);
    

  
}


ngOnInit(): void { 
  this.users = this._usersService.getCurrentUser(this.id);
  this.fname =this.users["fname"];
  this.age =this.users["age"];
  this.email =this.users["email"];

}


onSubmit(userForm :NgForm){

  // const send = userForm.value


  const send = {
    fname: this.fname,
    age: this.age,
    email: this.email,
    id:this.id
  }; 
  console.log(send);
  

  this._usersService.editUser(this.id, send);

  

}

}

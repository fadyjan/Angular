import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users = []
  id = 0


  constructor() { }

  getUsers() {
    return this.users
  }


  getCurrentUser(recived) {
    console.log("el id wesl belslma ll service");


    let obj = this.users.find(o => o.id == recived);

    console.log(obj);
    return obj
  }


  editUser(id: number,
    user: {
      email: string;
      fname: string;
      age: string
      id: Number
    })
    : void {
    var index = this.users.findIndex(item => item.id == id)
    this.users.splice(index, 1, user)
    console.log(this.users);

  }



  onSubmit(userForm: NgForm) {

    userForm["id"] = this.id
    this.users.push(userForm)
    this.id++



  }
}


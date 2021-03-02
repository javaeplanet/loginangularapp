import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor() { }
  // loginForm :FormGroup= new FormGroup(
  //   {
  //     $key: new FormControl(null),
  //     email: new FormControl('', Validators.email),
  //     password:new FormControl('', [Validators.required,Validators.minLength(6)])

  //   }
  // )



}

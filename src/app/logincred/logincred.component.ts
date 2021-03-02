import { Component, OnInit } from '@angular/core';

import { LoginService } from './../login.service';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-logincred',
  templateUrl: './logincred.component.html',
  styleUrls: ['./logincred.component.css']
})
export class LogincredComponent implements OnInit {

hide=true
email:string;
password:string;


  constructor( private router:Router) { }
  loginForm :FormGroup= new FormGroup(
    {
      $key: new FormControl(null),
      email: new FormControl('', Validators.email),
      password:new FormControl('', [Validators.required,Validators.minLength(6)])

    }
 
  )


  ngOnInit() {
    
   }
// onSubmit(){
//     if(this.loginForm.valid){
      
//       this.router.navigate(['/displayDashboard'])
//     }
//   }
    logIn(){
      if(this.email == "admin@gmail.com"  && this.password == "12345678"){
       console.log("success")
      }else{
        console.log("unauthorized")
      }
    
  }


}

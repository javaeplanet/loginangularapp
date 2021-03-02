import { Component, OnInit } from '@angular/core';

import { LoginService } from './../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logincred',
  templateUrl: './logincred.component.html',
  styleUrls: ['./logincred.component.css']
})
export class LogincredComponent implements OnInit {

hide=true



  constructor(public service:LoginService, private router:Router) { }

  ngOnInit() {
   }
onSubmit(){
    if(this.service.loginForm.valid){
      
      this.router.navigate(['/displayDashboard'])
    }
    
  }


}

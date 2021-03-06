import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
  	public router:Router,
  	public auth:AuthService
  	){

  }

  ngOnInit() {
  }

  login(data){
  	console.log(data)
          let details = data.value;

        this.auth.login(details).then(result => {
            this.router.navigateByUrl('/')
        }, 
          (err) => {
              console.log(err);
        });
    }

}

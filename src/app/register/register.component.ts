import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

message = "";

  constructor(
  	public auth:AuthService
  	){

  }

  ngOnInit() {
  }

  register(data){
  	console.log(data)
  	if(data.value.password != data.value.repeat_password){
  		this.message = "Password Mismatch";
  		console.log(this.message)
  	}else{

  		let details = {
  			name : data.value.name,
  			email : data.value.email,
  			password : data.value.password
  		}

  		this.auth.register(details).then((result) => {
  			console.log('register success')
        },
          (err) => {
          console.log(err);
      });
  	}

  	
  }

}

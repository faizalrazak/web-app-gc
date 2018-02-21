import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

token;

  constructor(
  	public http : Http
  	){

  }

  login(details){
  	console.log(details);
  	return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.post("http://gc-dashboard.herokuapp.com/api/user/login", JSON.stringify(details), {headers: headers})
          .subscribe(res => {
 
            let data = res.json();
            console.log(data)

            this.token = data.token;
            
            resolve(data);
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  register(details){
   console.log(details);
    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type','application/json');
       
      this.http.post('http://gc-dashboard.herokuapp.com/api/user/register', JSON.stringify(details), {headers:headers})
      .subscribe(res => {
       
        let data = res.json();
        console.log(data , "sini");
        resolve(data);
      
      }, (err) => {
        reject(err);
      });
    });
  }

}

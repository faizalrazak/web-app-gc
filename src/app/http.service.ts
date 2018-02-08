import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(public http : Http) {

  }

  getProduct(){
  	return this.http.get(
    	'http://gc-dashboard.herokuapp.com/api/products/all')
    .map((res:Response) => res.json());
  }

}

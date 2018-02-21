import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(
    public http : Http
    ){

  }

  getAllActiveDeal(){
    return this.http.get('http://gc-dashboard.herokuapp.com/api/deals/all/groceries')
    .map((res:Response)=>res.json());
  }

  getDealById(id){
    console.log(id, 'here')
    return this.http.get('http://gc-dashboard.herokuapp.com/api/deals/single/' + id)
    .map((res:Response) => res.json());
  }

  getProduct(){
  	return this.http.get(
    	'http://gc-dashboard.herokuapp.com/api/product/all')
    .map((res:Response) => res.json());
  }

  getLatestProducts(){
  	return this.http.get('http://gc-dashboard.herokuapp.com/api/product/latest')
    .map((res:Response) => res.json());
  }

  getProductCategory(){
    return this.http.get('http://gc-dashboard.herokuapp.com/api/product/category')
    .map((res:Response)=>res.json());
  }

  getBlogs(){
  	return this.http.get('http://gc-dashboard.herokuapp.com/api/blog/all')
    .map((res:Response) => res.json());
  }

  getBlogLatest(){
    return this.http.get('http://gc-dashboard.herokuapp.com/api/blog/latest')
    .map((res:Response) => res.json());
  }

  getHomemade(){
    return this.http.get('http://gc-dashboard.herokuapp.com/api/product/homemade')
    .map((res:Response) => res.json());
  }

  getAllHomemade(){
     return this.http.get('http://gc-dashboard.herokuapp.com/api/product/homemades')
    .map((res:Response) => res.json());
  }

  getGrubBag(){
    return this.http.get('http://gc-dashboard.herokuapp.com/api/product/grubBag')
    .map((res:Response) => res.json());
  }

  getAllGrubBag(){
     return this.http.get('http://gc-dashboard.herokuapp.com/api/product/grubBags')
    .map((res:Response) => res.json());
  }

}

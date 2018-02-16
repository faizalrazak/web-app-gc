import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

products;

  constructor(public router:Router, public httpService:HttpService){
  	this.httpService.getLatestProducts()
	  .subscribe(data => {
	    console.log(data)
	    this.products = data.data
	})
  }

  ngOnInit() {
  }

  aboutUs(){
    this.router.navigate(['/about-us']);
  }
}

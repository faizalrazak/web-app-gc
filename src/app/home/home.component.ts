import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

latest;
homemades;
currentPage;
grubBags;
blogLatest;

  constructor(
    public router:Router,
    public httpService:HttpService
  ){
  	this.httpService.getLatestProducts()
	  .subscribe(data => {
	    console.log(data)
	    this.latest = data.data
    })
    
    this.httpService.getHomemade()
    .subscribe(data =>{
      console.log(data)
      this.homemades = data.data;
    })

    this.httpService.getGrubBag()
    .subscribe(data => {
      this.grubBags = data.data;
      console.log(this.grubBags)
    });

    this.httpService.getBlogLatest()
    .subscribe(data => {
      this.blogLatest = data.data
    })
  }

  ngOnInit() {
    this.currentPage = this.router.url;
    console.log(this.currentPage)
  }

  aboutUs(){
    this.router.navigate(['/about-us']);
  }
}

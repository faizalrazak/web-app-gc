import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './../http.service'

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {

	products: any;

  constructor(public router:Router, private httpService:HttpService) {
	  this.httpService.getProduct()
	  .subscribe(data => {
	    console.log(data)
	    this.products = data.data
	  })
  }

  ngOnInit() {
  }

  detail(id){
  	this.router.navigate(['/product-detail', id])
  }

}

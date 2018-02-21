import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './../http.service'

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {

	deals: any;
  product_category;

  constructor(public router:Router, private httpService:HttpService) {
	  
    this.httpService.getAllActiveDeal()
	  .subscribe(data => {
	    console.log(data)
	    this.deals = data.data
	  })

    this.httpService.getProductCategory()
    .subscribe(data => {
      this.product_category = data.data
    })
  }

  ngOnInit() {
  }

  detail(id){
  	this.router.navigate(['/product-detail', id])
  }

}

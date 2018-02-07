import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  detail(){
  	this.router.navigateByUrl('product-detail')
  }

}

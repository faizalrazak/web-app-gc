import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

deal_id;
deal;

  constructor(
  	public router:Router,
  	public route:ActivatedRoute,
  	public httpService:HttpService
  	){
  	this.deal_id = this.route.snapshot.params['id'];
  	console.log(this.deal_id);

  	this.httpService.getDealById(this.deal_id)
  	.subscribe( data => {
  		this.deal = data.data
  		console.log(this.deal)
  	});
  }

  ngOnInit() {
  }

}

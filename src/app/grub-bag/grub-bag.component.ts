import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-grub-bag',
  templateUrl: './grub-bag.component.html',
  styleUrls: ['./grub-bag.component.css']
})
export class GrubBagComponent implements OnInit {

bags;

  constructor(
  	public httpService:HttpService
  	){

  	this.httpService.getAllGrubBag()
  	.subscribe( data => {
  		this.bags = data.data
  	})
  }

  ngOnInit() {
  }

}

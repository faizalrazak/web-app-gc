import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service'

@Component({
  selector: 'app-homemade',
  templateUrl: './homemade.component.html',
  styleUrls: ['./homemade.component.css']
})
export class HomemadeComponent implements OnInit {

homemades;

  constructor(
  	public httpService:HttpService
  	){

  	this.httpService.getAllHomemade()
  	.subscribe( data => {
  		this.homemades = data.data
  	})

  }

  ngOnInit() {
  }

}

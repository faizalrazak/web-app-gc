import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css']
})
export class OrderCompleteComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  groceries(){
  	this.router.navigateByUrl('groceries')
  }

}

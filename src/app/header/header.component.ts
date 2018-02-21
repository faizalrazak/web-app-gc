import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
  	public router:Router
  	){

  }

  ngOnInit() {
  }

  home(){
  	this.router.navigate(['/home']);
  }

  aboutUs(){
  	this.router.navigate(['/about-us']);
  }

  groceries(){
  	this.router.navigate(['/groceries']);
  }

  homemade(){
  	this.router.navigate(['/homemade']);
  }

  mobile(){
  	this.router.navigate(['/grub-mobile']);
  }

  bag(){
  	this.router.navigate(['/grub-bag']);
  }

  blog(){
  	this.router.navigate(['/blog']);
  }

  wishlist(){
  	this.router.navigate(['/wishlist']);
  }

  cart(){
  	this.router.navigate(['/cart']);
  }
}

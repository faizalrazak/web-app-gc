import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

blogs;

  constructor(public httpService:HttpService){
  	this.httpService.getBlogs()
	  .subscribe(data => {
	    console.log(data)
	    this.blogs = data.data
	})
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Iposts } from '../iposts';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private api: ApiService) { }

  posts: Iposts[];

  ngOnInit() {

    this.api.getPosts().subscribe(data =>
      this.posts = data
    );
  }

}

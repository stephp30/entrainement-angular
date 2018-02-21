import { Component, OnInit } from '@angular/core';
import { Iposts } from '../iposts';
import { PostListComponent } from '../post-list/post-list.component';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  posts: Iposts[];

  constructor(private route: ActivatedRoute, public userService: UserService) { }

  ngOnInit() {
    this.userService.getPostUser().subscribe(
      posts => this.posts = posts);

  }

}



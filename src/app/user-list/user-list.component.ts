import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Iuser} from '../iuser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private api: ApiService) { }

   users: Iuser[];

  ngOnInit() {

    this.api.getUsers().subscribe(data => {
    this.users = data;
    });
  }

}

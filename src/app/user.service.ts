import { Injectable } from '@angular/core';
import { Iuser } from './iuser';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Iposts } from './iposts';

@Injectable()
export class UserService {

  constructor(private api: ApiService) { }

  selectedUser: Iuser;
  posts: Iposts;

  getUser(id) {
    return this.api.getUser(id).pipe(tap(u => this.selectedUser = u ));
  }

  getPostUser() {
    return this.api.getUserPosts(this.selectedUser.id);
  }

  update(): Observable<Iuser> {
  return this.api.updateUser(this.selectedUser);
  }
}

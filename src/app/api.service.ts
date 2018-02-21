import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Iuser } from './iuser';
import { Iposts } from './iposts';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Iuser[]> {
    return this.http
    .get('http://localhost:3000/users') as Observable<Iuser[]> ;
  }
  getUser(id: number): Observable<Iuser> {
    return this.http
    .get('http://localhost:3000/users/' + id) as Observable<Iuser> ;
  }

  updateUser(user: Iuser): Observable<Iuser> {
    return this.http
    .put('http://localhost:3000/users/' + user.id, user) as Observable<Iuser>;
  }

  getPosts(): Observable<Iposts[]> {
    return this.http
    .get('http://localhost:3000/posts') as Observable<Iposts[]> ;
  }

  getUserPosts(id): Observable<Iposts[]> {
    return this.http
    .get('http://localhost:3000/users/' + id + '/posts' ) as Observable<Iposts[]>;
  }
}

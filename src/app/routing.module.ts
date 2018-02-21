import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { UserDetailComponent } from './user-list/user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserPostComponent } from './user-post/user-post.component';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    component: UserListComponent,
    path: 'users',
    // children: [
    // {
    //  path: ':id', component: UserDetailComponent
    // }]
  },
  {
    path: 'user/:id',
    component: UserDetailComponent,
    children: [
      {path: 'edit', component: UserFormComponent},
      {path: 'posts', component: UserPostComponent}
    ]
  },
  {
    component: PostListComponent,
    path: 'posts',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)

  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }

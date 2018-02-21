import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MatModule } from './/mat.module';
import { RoutingModule } from './/routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { UserDetailComponent } from './user-list/user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user.service';
import { UserPostComponent } from './user-post/user-post.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PostListComponent,
    UserDetailComponent,
    UserFormComponent,
    UserPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Iuser } from '../iuser';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: Iuser;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.selectedUser;
    console.log('ONINIT user :', this.user);

  }
  onSubmit() {
    console.log('ONSUBMIT user :', this.user);
    alert(`ONSUBMIT user : ${this.user.name}`);
    this.userService.update().subscribe();
  }
}

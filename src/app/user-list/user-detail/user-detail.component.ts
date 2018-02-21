import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from '../../iuser';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  id: number;
  user: Iuser;
  errText: string;

  ngOnInit() {
    // this.id = +this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe(params => this.id = +params.get('id'));

    this.userService.getUser(this.id).subscribe(user => this.user = user, err => this.errText = 'la requete a échouée' );
  }

}

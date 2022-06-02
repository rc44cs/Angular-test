import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../models/user.model';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user:IUser = new IUser();
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUserDetail();
  }

  getUserDetail(){
    this.route.params.subscribe((params) => {
      const username = params['username'];
      //use the userservice to get data from api
      this.userService.getSingleUser(username).subscribe((user) => {
        console.log(user);
        //bind that to a user var
        this.user = user;
      });
    });
  }

}

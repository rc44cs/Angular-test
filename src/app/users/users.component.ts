import { Component, OnInit } from '@angular/core';
import { IUser } from './models/user.model';
import { UserService } from './services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  dummyUsers: IUser[] = []
  searchKeyword: string = '';
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(): void {
   this.userService.getAllUsers().subscribe((result) => {
     if(result){
      this.users = result;
      this.dummyUsers = result;
     }
   });
  }

  filter(): void {

  }

}

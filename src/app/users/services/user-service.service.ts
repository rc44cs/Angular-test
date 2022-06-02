import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiURL: string = 'https://api.github.com/users';
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiURL + '?/per_page=30');
  }

  // Get single user
  getSingleUser(username: string) {
    return this.http.get(`${this.apiURL}/${username}`);
  }
}

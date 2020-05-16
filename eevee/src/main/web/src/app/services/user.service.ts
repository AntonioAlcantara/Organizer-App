import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: UserModel) {
    const url = 'http://51.210.46.242:8084/v1/user/register';
    const body = user;
    return this.http.post(url, body, {observe: 'response'});
  }
}

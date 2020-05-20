import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserModel } from '../models/user';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserFullInfoModel } from '../models/user-full-info.model';
import { FlatModel } from '../models/flat.model';
import { EventModel } from '../models/event.model';
import { UserLowInfoModel } from '../models/user-low-info.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  host = `${environment.host}v1/user`;

  constructor(private http: HttpClient) { }

  register(user: UserModel) {
    const url = 'http://51.210.46.242:8084/v1/user/register';
    const body = user;
    return this.http.post(url, body, {observe: 'response'});
  }

  getUserInfo(): Observable<HttpResponse<UserFullInfoModel>> {
    // require USERID by header, pending to add HttpInterceptor
    const url = `${this.host}/info`;
    return this.http.get<UserFullInfoModel>(url, {observe: 'response'});
  }

  getUserFlats(): Observable<HttpResponse<FlatModel>> {
    // require USERID by header, pending to add HttpInterceptor
    const url = `${this.host}/find/flat`;
    return this.http.get<FlatModel>(url, {observe: 'response'});
  }

  getUserEvents(complete?: boolean): Observable<HttpResponse<EventModel>> {
    // require USERID by header, pending to add HttpInterceptor
    // we can use complete by request param for obtain the completed events
    let url = `${this.host}/find/event`;
    if (!!complete) {
      url = url.concat(`?completed=${complete}`);
    }
    return this.http.get<EventModel>(url, {observe: 'response'});
  }

  checkEmail(email: string): Observable<HttpResponse<void>> {
    // If exists returns HttpStatus.OK, else HttpStatus.NO_CONTENT
    const url = `${this.host}/check/email?email=${email}`;
    return this.http.get<void>(url, {observe: 'response'});
  }

  checkNickname(nickname: string): Observable<HttpResponse<void>> {
    // If exists returns HttpStatus.OK, else HttpStatus.NO_CONTENT
    const url = `${this.host}/check/nickname/${nickname}`;
    return this.http.get<void>(url, {observe: 'response'});
  }

  findUsersByNickname(nickname: string): Observable<HttpResponse<UserLowInfoModel>> {
    const url = `${this.host}/find/${nickname}`;
    return this.http.get<UserLowInfoModel>(url, {observe: 'response'});
  }
}

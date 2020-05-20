import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserFullInfoModel } from '../models/user-full-info.model';
import { FlatModel } from '../models/flat.model';
import { EventModel } from '../models/event.model';
import { UserLowInfoModel } from '../models/user-low-info.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    host: string;
    constructor(private http: HttpClient) {
        this.host = environment.host;
    }

    register(user: UserModel): Observable<HttpResponse<boolean>> {
        const url = this.host + '/v1/user/register';
        const body = user;
        return this.http.post<boolean>(url, body, { observe: 'response' });
    }

    login(user: UserModel): Observable<HttpResponse<UserModel>> {
        const url = this.host + 'v1/user/login';
        const credentials = btoa(user.name + ':' + user.password);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        httpHeaders = httpHeaders.append('Authorization', 'Basic ' + credentials);
        httpHeaders = httpHeaders.append('skip', 'true');
        return this.http.get<UserModel>(url, { headers: httpHeaders, observe: 'response' });
    }

    checkNicknameExists(nickname: string): Observable<HttpResponse<boolean>> {
        const url = this.host + '/v1/user/check/nickname/' + nickname;
        return this.http.get<boolean>(url, { observe: 'response' });
    }

    checkEmailExists(email: string): Observable<HttpResponse<boolean>> {
        const url = this.host + '/v1/user/check/email/' + email;
        return this.http.get<boolean>(url, { observe: 'response' });
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

  findUsersByNickname(nickname: string): Observable<HttpResponse<UserLowInfoModel>> {
    const url = `${this.host}/find/${nickname}`;
    return this.http.get<UserLowInfoModel>(url, {observe: 'response'});
  }
}

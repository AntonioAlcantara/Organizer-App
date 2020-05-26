import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FlatModel } from '../models/flat.model';
import { EventModel } from '../models/event.model';
import { UserLowInfoModel } from '../models/user-low-info.model';
import { LoginInfoModel } from '../models/login-info.model';

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

    login(user: UserModel): Observable<HttpResponse<LoginInfoModel>> {
        const url = this.host + 'v1/user/login';
        const credentials = btoa(user.nickname + ':' + user.password);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        httpHeaders = httpHeaders.append('Authorization', 'Basic ' + credentials);
        httpHeaders = httpHeaders.append('skip', 'true');
        return this.http.get<LoginInfoModel>(url, { headers: httpHeaders, observe: 'response' });
    }

    checkNicknameExists(nickname: string): Observable<HttpResponse<boolean>> {
        const url = this.host + '/v1/user/check/nickname/' + nickname;
        return this.http.get<boolean>(url, { observe: 'response' });
    }

    checkEmailExists(email: string): Observable<HttpResponse<boolean>> {
        const url = this.host + '/v1/user/check/email/' + email;
        return this.http.get<boolean>(url, { observe: 'response' });
    }

    /**
     * require USERID by header, pending to add HttpInterceptor
     */
    getUserInfo(): Observable<HttpResponse<UserModel>> {
        const url = `${this.host}v1/user/info`;
        return this.http.get<UserModel>(url, { observe: 'response' });
    }

    /**
     * require USERID by header, pending to add HttpInterceptor
     */
    getUserFlats(): Observable<HttpResponse<FlatModel[]>> {
        const url = `${this.host}v1/user/find/flat`;
        return this.http.get<FlatModel[]>(url, { observe: 'response' });
    }

    /**
     * @param complete whether event has ended or not.
     * We can use complete as request param to obtain the completed events.
     * Require USERID by header, pending to add HttpInterceptor.
     */
    getUserEvents(complete?: boolean): Observable<HttpResponse<EventModel>> {
        let url = `${this.host}v1/user/find/event`;
        if (!!complete) {
            url = url.concat(`?completed=${complete}`);
        }
        return this.http.get<EventModel>(url, { observe: 'response' });
    }

    findUsersByNickname(nickname: string): Observable<HttpResponse<UserLowInfoModel>> {
        const url = `${this.host}v1/user/find/${nickname}`;
        return this.http.get<UserLowInfoModel>(url, { observe: 'response' });
    }
}

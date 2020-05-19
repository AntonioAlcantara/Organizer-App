import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RoomModel } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  host = `${environment.host}v1/room`;

  constructor(private http: HttpClient) { }

  createRoom(name: string, locale: string): Observable<HttpResponse<void>> {
    const url = `${this.host}/create/${name}/${locale}`;
    return this.http.post<void>(url, null, {observe: 'response'});
  }

  findAllRooms(locale: string): Observable<HttpResponse<RoomModel[]>> {
    const url = `${this.host}/findALL/${locale}`;
    return this.http.get<RoomModel[]>(url, {observe: 'response'});
  }
}

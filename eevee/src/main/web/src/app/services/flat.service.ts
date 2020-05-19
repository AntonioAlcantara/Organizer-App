import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CreateFlatModel } from '../models/create-flat.model';
import { EventModel } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class FlatService {

  host = `${environment.host}v1/flat`;

  constructor(private http: HttpClient) { }

  addUsersToFlat(flatId: number, userIds: number[]): Observable<HttpResponse<void>> {
    const url = `${this.host}/${flatId}/add/user`;
    return this.http.put<void>(url, userIds, {observe: 'response'});
  }

  createFlat(flatModel: CreateFlatModel): Observable<HttpResponse<void>> {
    const url = `${this.host}/create`;
    return this.http.post<void>(url, flatModel, {observe: 'response'});
  }

  findEventsByFlat(flatId: number): Observable<HttpResponse<EventModel[]>> {
    const url = `${this.host}/find/event/${flatId}`;
    return this.http.get<EventModel[]>(url, {observe: 'response'});
  }
}

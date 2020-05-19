import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateEventModel } from '../models/create-event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  host = `${environment.host}v1/event`;

  constructor(private http: HttpClient) { }

  completeEvent(eventId: number): Observable<HttpResponse<void>> {
    const url = `${this.host}/complete/${eventId}`;
    return this.http.put<void>(url, null, {observe: 'response'});
  }

  deleteEvent(eventId: number): Observable<HttpResponse<void>> {
    const url = `${this.host}/delete/${eventId}`;
    return this.http.delete<void>(url, {observe: 'response'});
  }

  createEvent(createEventModel: CreateEventModel): Observable<HttpResponse<void>> {
    // require USERID by header, pending to add HttpInterceptor
    const url = `${this.host}/create`;
    return this.http.post<void>(url, createEventModel, {observe: 'response'});
  }
}

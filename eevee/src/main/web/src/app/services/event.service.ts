import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateEventModel } from '../models/create-event.model';
import { EventTypeModel } from '../models/event-type.model';

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
  /**
   * Returns an event type array to display in the selector form from create event.
   * It is also used on the event's list to display event type and icon.
   */
  getEventTypes(): EventTypeModel[] {
    const eventTypes: EventTypeModel[] = [{
      id: 1,
      name: 'Compras',
      iconName: 'shopping_cart',
      color: 'coral'
    },
    {
      id: 2,
      name: 'Facturas',
      iconName: 'receipt',
      color: '#52a2d5'
    },
    {
      id: 3,
      name: 'Limpieza',
      iconName: 'local_laundry_service',
      color: '#f7c70a'
    },
    {
      id: 4,
      name: 'Mantenimiento',
      iconName: 'description',
      color: '#ff5757'
    },
    {
      id: 5,
      name: 'Administrativo',
      iconName: 'build',
      color: '#52a2d5'
    },
    {
      id: 6,
      name: 'Mascotas',
      iconName: 'pets',
      color: '#f7c70a'
    },
    {
      id: 7,
      name: 'Otros',
      iconName: 'supervised_user_circle',
      color: '#f7c70a'
    }
    ];
    return eventTypes;
  }
}

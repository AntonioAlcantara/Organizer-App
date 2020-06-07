import { Component, OnInit, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { EventModel } from 'src/app/models/event.model';
import { DatePipe } from '@angular/common';
import { DateAdapter } from '@angular/material/core';
import { EventService } from 'src/app/services/event.service';
import { MatTableDataSource } from '@angular/material/table';
import { EventTypeModel } from 'src/app/models/event-type.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NotificationsService } from 'src/app/services/notifications.service';
import { UserService } from 'src/app/services/user.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({display: 'none'})),
      state('expanded', style({display: 'block'})),
      transition('expanded <=> collapsed', animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EventsListComponent implements OnInit {

  selection = new SelectionModel<EventModel>(true, []);
  expandedElement: EventModel | null;
  @Input() completeEvents: boolean;
  loading = false;
  @Input() dataSource;
  constructor(
    private notificationService: NotificationsService,
    private userService: UserService,
    private eventService: EventService,
    private adapter: DateAdapter<any>,
    private datePipe: DatePipe,
  ) {}

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource<EventModel>(JSON.parse(sessionStorage.getItem('eventsList')));
  }

  delete(eventId: number) {
    this.loading = true;
    this.eventService.deleteEvent(eventId).subscribe( () =>  {
      this.notificationService.getSuccessMessage('Evento eliminado correctamente', 1000);
      this.userService.getUserEvents(this.completeEvents).subscribe((response: HttpResponse<EventModel[]>) => {
        if (response.status !== 204) {
          sessionStorage.setItem('eventsList', JSON.stringify(response.body));
          this.dataSource = new MatTableDataSource<EventModel>(JSON.parse(sessionStorage.getItem('eventsList')));
        } else {
          this.notificationService.getNoContentNotification();
          this.dataSource = new MatTableDataSource<EventModel>();
        }
      }, error => {
        this.notificationService.getErrorNotification(error.status);
      });
    }, error => {
      this.notificationService.getErrorNotification(error.status);
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }

  complete(eventId: number) {
    this.loading = true;
    this.eventService.completeEvent(eventId).subscribe( () =>  {
      this.notificationService.getSuccessMessage('Evento completado', 1000);
      this.userService.getUserEvents(this.completeEvents).subscribe((response: HttpResponse<EventModel[]>) => {
        if (response.status !== 204) {
          sessionStorage.setItem('eventsList', JSON.stringify(response.body));
          this.dataSource = new MatTableDataSource<EventModel>(JSON.parse(sessionStorage.getItem('eventsList')));
        } else {
          this.notificationService.getNoContentNotification();
          this.dataSource = new MatTableDataSource<EventModel>();
        }
      }, error => {
        this.notificationService.getErrorNotification(error.status);
      });
    }, error => {
      this.notificationService.getErrorNotification(error.status);
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }

  isElementActive(element): boolean {
    return true;
  }

  getElementIcon(elementType: string): string {
    const types = this.eventService.getEventTypes();
    let eventType: EventTypeModel = new EventTypeModel();
    eventType = types.find(type => type.name === elementType);
    return eventType.iconName;
  }
  getElementColor(elementType: string): string {
    const types = this.eventService.getEventTypes();
    let eventType: EventTypeModel = new EventTypeModel();
    eventType = types.find(type => type.name === elementType);
    return eventType.color;
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EventModel } from 'src/app/models/event.model';
import { UserService } from 'src/app/services/user.service';
import { HttpResponse } from '@angular/common/http';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventsComponent implements OnInit {

  options = [{name: 'Activos', value: false}, { name: 'Inactivos', value: true}];
  dataSource;
  loading = false;
  selectedOption;
  expandedElement: EventModel | null;
  constructor(
    private userService: UserService,
    private notificationsService: NotificationsService
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<EventModel>(JSON.parse(sessionStorage.getItem('eventsList')));
  }
  onSelect(event) {
    this.reloadEvents(event.value);
  }

  reloadEvents(value: boolean) {
    this.loading = true;
    this.userService.getUserEvents(value).subscribe((response: HttpResponse<EventModel[]>) => {
      if (response.status !== 204) {
        sessionStorage.setItem('eventsList', JSON.stringify(response.body));
        this.loading = false;
      } else {
        this.notificationsService.getNoContentNotification();
        this.loading = false;
      }
    }, error => {
        this.notificationsService.getErrorNotification(error.status);
        this.loading = false;
    }, () => {
      this.ngOnInit();
    });
  }

}

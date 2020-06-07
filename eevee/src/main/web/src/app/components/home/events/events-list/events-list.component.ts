import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { EventModel } from 'src/app/models/event.model';
import { DatePipe } from '@angular/common';
import { DateAdapter } from '@angular/material/core';
import { EventService } from 'src/app/services/event.service';
import { MatTableDataSource } from '@angular/material/table';
import { EventTypeModel } from 'src/app/models/event-type.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  selection = new SelectionModel<EventModel>(true, []);
  expandedElement: EventModel | null;
  dataSource;
  constructor(
    private eventService: EventService,
    private adapter: DateAdapter<any>,
    private datePipe: DatePipe,
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<EventModel>(JSON.parse(sessionStorage.getItem('eventsList')));
  }

  delete(event) {}
  complete(event) {}

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

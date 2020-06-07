import { Component, OnInit, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { EventModel } from 'src/app/models/event.model';
import { DatePipe } from '@angular/common';
import { DateAdapter } from '@angular/material/core';
import { EventService } from 'src/app/services/event.service';
import { MatTableDataSource } from '@angular/material/table';
import { EventTypeModel } from 'src/app/models/event-type.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
  @Input() dataSource;
  constructor(
    private eventService: EventService,
    private adapter: DateAdapter<any>,
    private datePipe: DatePipe,
  ) {}

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource<EventModel>(JSON.parse(sessionStorage.getItem('eventsList')));
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

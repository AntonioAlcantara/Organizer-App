import { Component, OnInit, Input } from '@angular/core';
import { EventModel } from 'src/app/models/event.model';
import { DatePipe } from '@angular/common';
import { DateAdapter } from '@angular/material/core';
import { SelectionModel } from '@angular/cdk/collections';
import { stringify } from 'querystring';
import { EventService } from 'src/app/services/event.service';
import { EventTypeModel } from 'src/app/models/event-type.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '100px'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EventsTableComponent implements OnInit {

  columns = ['type', 'name', 'amount', 'active', 'delete', 'markAsComplete', 'details'];
  selection = new SelectionModel<EventModel>(true, []);
  expandedElement: EventModel | null;
  constructor(
    private eventService: EventService,
    private adapter: DateAdapter<any>,
    private datePipe: DatePipe,
  ) { }
  @Input() dataSource: EventModel[] = [{
    id: 6,
    title: 'Pagar netflix',
    description: 'Pagar factura junio',
    amount: 122.9 ,
    startDate: new Date ('2020-06-01'),
    endDate: new Date ('2020-06-01'),
    eventType: 'Mascotas',
    rooms: [{id: 1, name: 'Cosina'}],
    creator: 'Sylvia',
    users: [{id: 2, name: 'Silvia', surname: 'Marin', nickname: '@Karen', city: 'PMI'},
  {id: 2, name: 'Silvia', surname: 'Marin', nickname: '@Karen', city: 'PMI'}]
  },
  {
    id: 6,
    title: 'Pagar netflix',
    description: 'Pagar factura junio',
    amount: 122.9 ,
    startDate: new Date ('2020-06-01'),
    endDate: new Date ('2020-06-01'),
    eventType: 'Mascotas',
    rooms: [{id: 1, name: 'Cosina'}],
    creator: 'Sylvia',
    users: [{id: 2, name: 'Silvia', surname: 'Marin', nickname: '@Karen', city: 'PMI'},
  {id: 2, name: 'Silvia', surname: 'Marin', nickname: '@Karen', city: 'PMI'}]
  }
];

  ngOnInit(): void {
  }

  delete(event) {}

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

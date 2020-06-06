import { Component, OnInit, Input } from '@angular/core';
import { EventModel } from 'src/app/models/event.model';
import { DatePipe } from '@angular/common';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss']
})
export class EventsTableComponent implements OnInit {

  columns = ['type', 'name', 'amount', 'active', 'delete', 'markAsComplete', 'details'];
  constructor(
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
  }];
  ngOnInit(): void {
  }

}

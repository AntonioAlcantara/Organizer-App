import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventsComponent implements OnInit {

  selectedOption = false;
  constructor() { }

  ngOnInit(): void {
  }

}

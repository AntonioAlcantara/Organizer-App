import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FlatModel } from 'src/app/models/flat.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  flatList: FlatModel[];
  eventForm: FormGroup;
  constructor( private userService: UserService) {
    this.eventForm = new FormGroup({
      selectedFlat: new FormControl(),
      eventName: new FormControl(),
      desccription: new FormControl(),
      amount: new FormControl(),
      // eventType
    });
  }


  ngOnInit(): void {
    this.flatList = JSON.parse(sessionStorage.getItem('flatsList'));
  }


}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FlatModel } from 'src/app/models/flat.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { EventTypeModel } from 'src/app/models/event-type.model';
import { RoomModel } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { UserLowInfoModel } from 'src/app/models/user-low-info.model';
import { DateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  flatList: FlatModel[];
  roomList: RoomModel[];
  roommatesList: UserLowInfoModel[];
  eventTypes: EventTypeModel[];
  eventForm: FormGroup;
  isFlatSelected = false;
  loading = false;
  today: Date = new Date();

  constructor(
    private userService: UserService,
    private eventService: EventService,
    private roomService: RoomService,
    private adapter: DateAdapter<any>,
    private datePipe: DatePipe,
    private notificationsService: NotificationsService
  ) {
    this.eventForm = new FormGroup({
      selectedFlat: new FormControl(''),
      eventName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      amount: new FormControl('', [Validators.required]),
      eventType: new FormControl('', [Validators.required]),
      belongingRoom: new FormControl('', [Validators.required]),
      startDate: new FormControl({disabled: true}, [Validators.required]),
      endDate: new FormControl({disabled: true}, [Validators.required]),
      roommates: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
    this.flatList = JSON.parse(sessionStorage.getItem('flatsList'));
    this.eventTypes = this.eventService.getEventTypes();
    this.roomService.findAllRooms('es_ES').subscribe(response => {
      this.roomList = response.body;
    }, error => this.notificationsService.getErrorNotification(error.status));
    this.adapter.setLocale('es');
  }
  /**
   * Triggers loading component and loads event form
   */
  selectFlat() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.isFlatSelected = true;
      this.roommatesList = this.eventForm.controls.selectedFlat.value.users;
    }, 1000);
  }
  clearForm() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.isFlatSelected = false;
      this.eventForm.reset();
    }, 1000);
  }
  createEvent() {
    this.loading = true;
    console.log(this.eventForm.value);
    this.loading = false;
  }



}

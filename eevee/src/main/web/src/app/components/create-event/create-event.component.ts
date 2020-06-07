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
import { CreateEventModel } from 'src/app/models/create-event.model';
import { HttpResponse } from '@angular/common/http';
import { EventModel } from 'src/app/models/event.model';

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
  newEvent: CreateEventModel;

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
      amount: new FormControl(''),
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
    this.newEvent = new CreateEventModel();
    this.newEvent.title = this.eventForm.controls.eventName.value;
    this.newEvent.description = this.eventForm.controls.description.value;
    this.newEvent.flatId = this.eventForm.controls.selectedFlat.value.id;
    this.newEvent.amount = this.eventForm.controls.amount.value;
    this.newEvent.eventType = this.eventForm.controls.eventType.value.name;
    this.newEvent.roomIds = [this.eventForm.controls.belongingRoom.value.id];
    this.newEvent.userIds = this.eventForm.controls.roommates.value;
    this.newEvent.startDate = this.datePipe.transform(this.eventForm.controls.startDate.value, 'yyyy-MM-dd');
    this.newEvent.endDate = this.datePipe.transform(this.eventForm.controls.endDate.value, 'yyyy-MM-dd');
    this.eventService.createEvent(this.newEvent).subscribe(response => {
      if (response.status === 201) {
        this.reloadEvents();
      }
    }, error => {
      this.notificationsService.getErrorNotification(error.status);
      this.loading = false;
    }, () => {
      this.loading = false;
      this.clearForm();
      this.notificationsService.getSuccessMessage('El evento se ha añadido correctamente');
    });
  }
  reloadEvents() {
    this.userService.getUserEvents(false).subscribe((response: HttpResponse<EventModel[]>) => {
      if (response.status !== 204) {
        sessionStorage.setItem('eventsList', JSON.stringify(response.body));
      } else {
        this.notificationsService.getNoContentNotification();
      }}, error => this.notificationsService.getErrorNotification(error.status)
    );
  }



}

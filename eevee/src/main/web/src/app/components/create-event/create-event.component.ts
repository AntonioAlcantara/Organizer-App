import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FlatModel } from 'src/app/models/flat.model';
import { FormGroup, FormControl } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { EventTypeModel } from 'src/app/models/event-type.model';
import { RoomModel } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { UserLowInfoModel } from 'src/app/models/user-low-info.model';

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

  constructor(
    private userService: UserService,
    private eventService: EventService,
    private roomService: RoomService,
    private notificationsService: NotificationsService
    ) {
    this.eventForm = new FormGroup({
      selectedFlat: new FormControl(),
      eventName: new FormControl(),
      description: new FormControl(),
      amount: new FormControl(),
      eventType: new FormControl(),
      belongingRoom: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
      roommates: new FormControl()
    });
  }
  ngOnInit(): void {
    this.flatList = JSON.parse(sessionStorage.getItem('flatsList'));
    this.eventTypes = this.eventService.getEventTypes();
    this.roomService.findAllRooms('es_ES').subscribe(response => {
      this.roomList = response.body;
    }, error => this.notificationsService.getErrorNotification(error.status));
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



}

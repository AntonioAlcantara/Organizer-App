import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FlatModel } from 'src/app/models/flat.model';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationsService } from 'src/app/services/notifications.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private userService: UserService,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.userService.getUserFlats().subscribe((response: HttpResponse<FlatModel[]>) => {
      if (response.status !== 204) {
        sessionStorage.setItem('flatsList', JSON.stringify(response.body));
      } else {
        this.notificationsService.getNoContentNotification();
      }}, error => this.notificationsService.getErrorNotification(error.status)
    );
  }

}

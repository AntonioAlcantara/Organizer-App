import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FlatModel } from 'src/app/models/flat.model';
import { FlatService } from 'src/app/services/flat.service';
import { UserLowInfoModel } from 'src/app/models/user-low-info.model';
import { HttpResponse } from '@angular/common/http';
import { NotificationsService } from 'src/app/services/notifications.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUsersComponent } from './add-users/add-users.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlatListComponent implements OnInit {

  dataSource: MatTableDataSource<FlatModel>;
  loading: boolean;
  constructor(
    private userService: UserService,
    private flatService: FlatService,
    private notificationsService: NotificationsService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    const flats: FlatModel[] = JSON.parse(sessionStorage.getItem('flatsList'));
    this.dataSource = new MatTableDataSource<FlatModel>(flats);
    console.log(this.dataSource);
  }

  openSearchModal(flatID, userIDS: UserLowInfoModel[]) {
    const userIds: number[] = [];
    userIDS.forEach(user => {
      userIds.push(user.id);
    });
    // We could use option backdrop: 'static' in modal options to block backdrop
    const modalRef = this.dialog.open(AddUsersComponent,
      { minWidth: '350px',
        minHeight: '250px',
        disableClose: true,
      });
    modalRef.addPanelClass('customModal');
    modalRef.afterClosed().subscribe((response: number) => {
      this.loading = true;
      if (response !== undefined) {
        userIds.push(response);
        this.addUser(userIds, flatID);
      } else { this.loading = false; }
    });
  }

  addUser(userIds: number[], flatID: number) {
    this.flatService.addUsersToFlat(flatID, userIds)
      .subscribe(response => {
        if (response.status === 200) {
          this.notificationsService.getSuccessMessage('User added successfully!');
          this.reload();
        }
      }, error => {
        this.notificationsService.getErrorNotification(error.status);
        this.loading = false;
      });
  }

  reload() {
    this.loading = true;
    this.userService.getUserFlats().subscribe((response: HttpResponse<FlatModel[]>) => {
      if (response.status !== 204) {
        sessionStorage.setItem('flatsList', JSON.stringify(response.body));
        this.ngOnInit();
        this.loading = false;
      } else {
        this.notificationsService.getNoContentNotification();
      }}, error => {
        this.notificationsService.getErrorNotification(error.status);
        this.loading = false;
      });
  }

}

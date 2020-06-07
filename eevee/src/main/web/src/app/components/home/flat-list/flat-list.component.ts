import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FlatModel } from 'src/app/models/flat.model';
import { FlatService } from 'src/app/services/flat.service';
import { UserLowInfoModel } from 'src/app/models/user-low-info.model';
import { HttpResponse } from '@angular/common/http';
import { NotificationsService } from 'src/app/services/notifications.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUsersComponent } from './add-users/add-users.component';
import { UserService } from 'src/app/services/user.service';
import { AddFlatComponent } from '../../add-flat/add-flat.component';

@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlatListComponent implements OnInit {

  dataSource: MatTableDataSource<FlatModel>;
  loading: boolean;
  selectable = true;
  removable = true;
  dialogRef;
  constructor(
    private userService: UserService,
    private flatService: FlatService,
    private notificationsService: NotificationsService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    const flats: FlatModel[] = JSON.parse(sessionStorage.getItem('flatsList'));
    this.dataSource = new MatTableDataSource<FlatModel>(flats);
  }

  openCreateFlat() {
      this.dialogRef = this.dialog.open(AddFlatComponent, {
        disableClose: true,
        width: 'auto',
        minHeight: '300px'
      });
  }
  openSearchModal(flatID, userIDS: UserLowInfoModel[]) {
    const userIds: number[] = [];
    userIDS.forEach(user => {
      userIds.push(user.id);
    });
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
          this.notificationsService.getSuccessMessage('Usuario añadido correctamente!');
          this.reload();
        }
      }, error => {
        this.notificationsService.getErrorNotification(error.status);
        this.loading = false;
      });
  }

  deleteUser(userToDelete: UserLowInfoModel, userIDS: UserLowInfoModel[], flatID: number) {
    if (userToDelete.id !== JSON.parse(sessionStorage.getItem('userId'))) {
      const userIds = [];
      const index = userIDS.findIndex(user => user.id === userToDelete.id);
      userIDS.splice(index, 1);
      userIDS.forEach(user => {
        userIds.push(user.id);
      });
      this.flatService.addUsersToFlat(flatID, userIds)
      .subscribe(response => {
        if (response.status === 200) {
          this.notificationsService.getSuccessMessage('Usuario eliminado correctamente!');
          this.reload();
        }
      }, error => {
        this.notificationsService.getErrorNotification(error.status);
        this.loading = false;
      });
    } else {
      this.notificationsService.getSuccessMessage('No puedes eliminarte de la lista!');
    }
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

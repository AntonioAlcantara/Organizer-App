import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserLowInfoModel } from 'src/app/models/user-low-info.model';
import { UserService } from 'src/app/services/user.service';
import { HttpResponse } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {

  searchRoommateForm: FormGroup;
  flatUser: UserLowInfoModel[] = [];
  selectedUser: UserLowInfoModel;
  showAutocomplete: boolean;
  constructor(
    private userService: UserService,
    private notificationsService: NotificationsService,
    public dialogRef: MatDialogRef<AddUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.dialogRef.disableClose = true;
      this.searchRoommateForm = new FormGroup({
        userName: new FormControl('', [Validators.required])
      });
  }

  ngOnInit(): void {
  }

  findUsers(name: string) {
    this.flatUser = [];
    if (name.length !== 0) {
      this.userService.findUsersByNickname(name)
        .subscribe((users: HttpResponse<UserLowInfoModel>) => {
          if (users.status !== 204) {
            this.flatUser.push(users.body);
          } else {this.notificationsService.getNoContentNotification();
          }
        }, error => this.notificationsService.getErrorNotification(error.status));
    }

  }
  autocompleteClose(event) {
    if (event && event.length > 0) {
         this.showAutocomplete = true;
    } else {
         this.showAutocomplete = false;
    }
}
  addUser() {
      this.userService.findUsersByNickname(this.searchRoommateForm.controls.userName.value)
      .subscribe((user: HttpResponse<UserLowInfoModel>) => {
        if (user.status !== 204) {
          this.dialogRef.close(user.body[0].id);
        } else {this.notificationsService.getNoContentNotification();
        }
      }, error => this.notificationsService.getErrorNotification(error.status));
  }

  close() {
    this.dialogRef.close();
  }

}

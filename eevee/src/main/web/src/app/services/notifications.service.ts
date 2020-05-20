import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../components/snack-bar/snack-bar.component';
import { CommunicationModel } from '../models/communication-model';
import { CommunicationType } from '../models/communication-type.model';

@Injectable({
    providedIn: 'root'
})
export class NotificationsService {

    communication: CommunicationModel = new CommunicationModel();
    constructor(
        private snackbar: MatSnackBar
    ) { }
    getErrorNotification(errorCode?: number) {
        this.communication.type = CommunicationType.error;
        switch (errorCode) {
            case (500 || 503 || 502):
                this.communication.message = 'Server is unavailable at this time!';
                break;
            case (404):
                this.communication.message = 'Page not found';
                break;
            default:
            this.communication.message = 'Something went wrong!';
        }
        this.snackbar.openFromComponent(SnackBarComponent, {
            data: this.communication,
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'end'
        });
    }
    getUserAlreadyExists() {
        this.communication.type = CommunicationType.error;
        this.communication.message = 'E-mail or Nickname already exists!';
        this.snackbar.openFromComponent(SnackBarComponent, {
            data: this.communication,
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'end'
        });
    }
}

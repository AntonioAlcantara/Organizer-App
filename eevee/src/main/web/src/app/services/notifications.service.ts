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
            case (401):
                this.communication.message = 'Invalid username or password.';
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
    getNoContentNotification() {
        this.communication.type = CommunicationType.error;
        this.communication.message = 'Sorry! No results were found.';
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
    getSuccessMessage(message: string) {
        this.communication.type = CommunicationType.action;
        this.communication.message = message;
        this.snackbar.openFromComponent(SnackBarComponent, {
            data: this.communication,
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'end'
        });
    }
}

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
                this.communication.message = 'Servidor no disponible en estos momentos!';
                break;
            case (401):
                this.communication.message = 'Nombre de usuario o contraseña incorrectos.';
                break;
            case (404):
                this.communication.message = 'Página no encontrada';
                break;
            default:
            this.communication.message = 'Parece que algo a salido mal!';
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
        this.communication.message = 'No se han encontrado resultados.';
        this.snackbar.openFromComponent(SnackBarComponent, {
            data: this.communication,
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'end'
        });
    }
    getUserAlreadyExists() {
        this.communication.type = CommunicationType.error;
        this.communication.message = 'E-mail or Nickname ya existe!';
        this.snackbar.openFromComponent(SnackBarComponent, {
            data: this.communication,
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'end'
        });
    }
    getSuccessMessage(message: string, duration?: number) {
        this.communication.type = CommunicationType.action;
        this.communication.message = message;
        this.snackbar.openFromComponent(SnackBarComponent, {
            data: this.communication,
            duration: (duration) ? duration : 3000,
            verticalPosition: 'top',
            horizontalPosition: 'end'
        });
    }
}

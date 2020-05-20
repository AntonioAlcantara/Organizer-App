import { CommunicationType } from './communication-type.model';

export class CommunicationModel {

     // Used to display communications in snackbars or alerts
     message: string;
     type: CommunicationType;
     constructor() {
          this.message = '';
          this.type = CommunicationType.action;
     }
}

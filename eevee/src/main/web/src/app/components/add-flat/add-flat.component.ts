import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlatService } from 'src/app/services/flat.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { CreateFlatModel } from 'src/app/models/create-flat.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-flat',
  templateUrl: './add-flat.component.html',
  styleUrls: ['./add-flat.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddFlatComponent implements OnInit {

  addFlatForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddFlatComponent>,
    private flatService: FlatService,
    private notificationsService: NotificationsService
  ) {
    this.dialogRef.disableClose = true;
    this.addFlatForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      street: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      number: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      postalCode: new FormControl('', [Validators.required,
        Validators.minLength(5), Validators.maxLength(5)])
    });
  }

  ngOnInit(): void {
  }
  addFlat() {
    if (this.addFlatForm.valid) {
      const flat = new CreateFlatModel();
      flat.name = this.addFlatForm.controls.name.value;
      flat.address = this.composeAddress();
      flat.userIds.push(localStorage.getItem('userId'));
      console.log(flat);
      this.flatService.createFlat(flat).subscribe(response => {
        this.dialogRef.close(true);
        this.notificationsService.getSuccessMessage(flat.name + 'created successfully.');
      }, error => this.notificationsService.getErrorNotification(error.status)
      );
    }
  }
  composeAddress(): string {
    return this.addFlatForm.controls.street.value + ',\xa0' +  this.addFlatForm.controls.number.value
    + '\xa0' + this.addFlatForm.controls.postalCode.value;
  }
  cancel() {
    this.dialogRef.close(true);
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlatService } from 'src/app/services/flat.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { CreateFlatModel } from 'src/app/models/create-flat.model';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpResponse } from '@angular/common/http';
import { FlatModel } from 'src/app/models/flat.model';

@Component({
  selector: 'app-add-flat',
  templateUrl: './add-flat.component.html',
  styleUrls: ['./add-flat.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddFlatComponent implements OnInit {

  addFlatForm: FormGroup;
  loading = false;
  constructor(
    public dialogRef: MatDialogRef<AddFlatComponent>,
    private flatService: FlatService,
    private userService: UserService,
    private notificationsService: NotificationsService,
    private router: Router
  ) {
    this.dialogRef.disableClose = true;
    this.addFlatForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      street: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      number: new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,3}'), Validators.maxLength(3)]),
      postalCode: new FormControl('', [Validators.required,
        Validators.minLength(5), Validators.maxLength(5)])
    });
  }

  ngOnInit(): void {
  }
  addFlat() {
    if (this.addFlatForm.valid) {
      this.loading = true;
      const flat = new CreateFlatModel();
      flat.name = this.addFlatForm.controls.name.value;
      flat.address = this.composeAddress();
      flat.userIds.push(sessionStorage.getItem('userId'));
      this.flatService.createFlat(flat).subscribe(response => {
        this.dialogRef.close(true);
        this.notificationsService.getSuccessMessage(flat.name + ' se ha añadido correctamente.');
        this.saveFlats();
        this.loading = false;
      }, error => {
        this.notificationsService.getErrorNotification(error.status);
        this.loading = false;
      });
    }
  }
  composeAddress(): string {
    return this.addFlatForm.controls.street.value + ',\xa0' +  this.addFlatForm.controls.number.value
    + '\xa0' + this.addFlatForm.controls.postalCode.value;
  }
  cancel() {
    this.dialogRef.close(true);
  }
  saveFlats() {
    this.userService.getUserFlats().subscribe((response: HttpResponse<FlatModel[]>) => {
      if (response.status !== 204) {
        sessionStorage.setItem('flatsList', JSON.stringify(response.body));
      } else {
        this.notificationsService.getNoContentNotification();
      }}, error => this.notificationsService.getErrorNotification(error.status)
    );
  }

}

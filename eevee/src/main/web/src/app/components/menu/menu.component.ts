import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFlatComponent } from '../add-flat/add-flat.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private dialogRef;
  innerWidth: number;
  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
  }
  openModal(modal: string) {
    this.dialogRef = this.dialog.open(AddFlatComponent, {
      disableClose: true,
      width: 'auto',
      minHeight: '300px'
 });
  }
}

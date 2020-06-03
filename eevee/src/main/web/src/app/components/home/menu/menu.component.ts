import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFlatComponent } from '../../add-flat/add-flat.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private dialogRef;
  innerWidth: number;
  constructor(
    private router: Router,
    private dialog: MatDialog) {

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
  showFlats() {
    this.router.navigate(['/home/flats']);
  }
  logOut() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }
}

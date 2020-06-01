import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-info-dialog',
  templateUrl: './modal-info-dialog.component.html',
  styleUrls: ['./modal-info-dialog.component.scss']
})
export class ModalInfoDialogComponent implements OnInit {

  showMore = false;
  showButton = 'MOSTRAR MÁS';
  showIcon = 'expand_more';
  constructor() { }

  ngOnInit(): void {
  }
  showMoreInfo() {
    if (this.showMore === false) {
      this.showMore = true;
      this.showButton = 'OCULTAR';
      this.showIcon = 'expand_less';
      document.getElementById('showMoreSection').style.display = 'block';
      document.getElementById('showMoreSection').scrollIntoView();
    } else {
      this.showMore = false;
      this.showButton = 'MOSTRAR MÁS';
      this.showIcon = 'expand_more';
      document.getElementById('showMoreSection').style.display = 'none';
      document.body.scrollIntoView();
    }
  }

}

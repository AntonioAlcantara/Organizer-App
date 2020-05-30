import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input() loading: boolean;
  mode = 'indeterminate';
  value = 50;
  constructor() { }

  ngOnInit(): void {
  }

}

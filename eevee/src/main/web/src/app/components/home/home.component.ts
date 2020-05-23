import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FlatModel } from 'src/app/models/flat.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flats: FlatModel[] = [];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserFlats().subscribe(response => {
        console.log(response);
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FlatModel } from 'src/app/models/flat.model';
import { FlatService } from 'src/app/services/flat.service';

@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.scss']
})
export class FlatListComponent implements OnInit {

  dataSource: MatTableDataSource<FlatModel> ;
  constructor(
    private flatService: FlatService
  ) {}

  ngOnInit(): void {
    const flats: FlatModel[] = JSON.parse(sessionStorage.getItem('flatsList'));
    this.dataSource = new MatTableDataSource<FlatModel>(flats);

  }

  /**
   * @param id flat Id from selected flat
   * @param name flat name to chow in modal
   */
  addUser(id: number, name: string) {
    console.log(id, name);
  }

}

import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css'],
})
export class DogsListComponent implements OnInit {
  dogsList: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((res) => {
      this.dogsList = Object.keys(res.message).map((key) => key);
      console.log(this.dogsList);
    });
  }
}

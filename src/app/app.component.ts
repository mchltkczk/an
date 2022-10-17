import { Component } from '@angular/core';
import { DataService } from './data.service';
import { DogList } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dogsList: any;
  dogToRender: any;
  dogImage: any;
  dogLink: any;

  constructor(private dataService: DataService) {}

  onChange(change: any) {
    this.dogToRender = change.target.value;
    this.dataService.getImage(this.dogToRender).subscribe((res) => {
      this.dogImage = res.message;
      this.dogImage = this.dogImage[0];
      this.dogLink = 'https://en.wikipedia.org/wiki/' + this.dogToRender;
    });
  }

  ngOnInit() {
    this.dataService.getData().subscribe((res) => {
      this.dogsList = Object.keys(res.message).map((key) => key);
      console.log(this.dogsList);
    });
  }
}

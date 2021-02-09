import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  someValue: number;
  a: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    // this.someValue = this.dataService.getCurrentState();
    this.dataService.getCurrentState().subscribe(value => this.someValue = value);
    console.log(this.a);
  }

  increment(): void {
    this.dataService.setNewState();
  }
}

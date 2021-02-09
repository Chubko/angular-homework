import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from './services/data.service';
import {BComponent} from './components/b/b.component';
import {AComponent} from './components/a/a.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements /*OnChanges*/ OnInit, /*DoCheck, OnDestroy, */ AfterViewInit {
  @ViewChild(AComponent)
  a: AComponent;
  @ViewChild(BComponent)
  b: BComponent;

  constructor(private dataService: DataService) {
  }

  increment(): void {
    this.dataService.setNewState();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('on changes');
  //   console.log(changes);
  // }

  ngOnInit(): void {
    console.log('on init');
  }

  // ngDoCheck(): void {
  //   console.log('do check');
  // }

  // ngAfterContentInit(): void {
  //   console.log('after content init');
  // }

  // ngOnDestroy(): void {
  // }

  ngAfterViewInit(): void {
    console.log(this.a);
    console.log(this.b);
    this.a.a = 'asdff';
  }
}

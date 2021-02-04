import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-HW';

  asyncValue = new Promise(resolve => {
    setTimeout(() => {
      resolve('this is async');
    }, 1000);
  });

  date = new Date();

  price = 100;

  e = 2.3547290346789;
}

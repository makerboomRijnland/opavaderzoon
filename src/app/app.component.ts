import { Component } from '@angular/core';
import { OPA } from './opa'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OpaVaderZoon';
  opa = OPA;
}

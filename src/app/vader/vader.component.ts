import { Component, OnInit, Input } from '@angular/core';
import {Persoon} from '../opa';

@Component({
  selector: 'app-vader',
  templateUrl: './vader.component.html',
  styleUrls: ['./vader.component.scss']
})
export class VaderComponent implements OnInit {

  @Input() persoon: Persoon;
  @Input() opa: Persoon;

  constructor() { }

  ngOnInit() {
  }

}

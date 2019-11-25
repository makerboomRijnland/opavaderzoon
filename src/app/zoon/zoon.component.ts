import { Component, OnInit, Input } from '@angular/core';
import { Persoon } from '../opa';

@Component({
  selector: 'app-zoon',
  templateUrl: './zoon.component.html',
  styleUrls: ['./zoon.component.scss']
})
export class ZoonComponent implements OnInit {

  @Input() persoon: Persoon;
  @Input() vader: Persoon;
  @Input() opa: Persoon;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import {Persoon} from '../opa';

@Component({
  selector: 'app-opa',
  templateUrl: './opa.component.html',
  styleUrls: ['./opa.component.scss']
})
export class OpaComponent implements OnInit {
  @Input() persoon: Persoon;

  constructor() { }

  kleinKinderen():number {
    let kleinkinderen = 0;
     this.persoon.kinderen.forEach((kind) => {
       kleinkinderen += kind.kinderen.length;
     });
     return kleinkinderen;
  }

  ngOnInit() {
  }

}

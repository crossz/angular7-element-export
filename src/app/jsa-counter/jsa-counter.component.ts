import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-jsa-counter',
  templateUrl: './jsa-counter.component.html',
  styleUrls: ['./jsa-counter.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class JsaCounterComponent implements OnInit {

  @Input()
  set counter(counter: number) {
    this._counter = counter;
  }
  get counter(): number {
    return this._counter;
  }
  _counter = 0;

  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.counter++;
  }

  descrease() {
    this.counter--;
  }
}

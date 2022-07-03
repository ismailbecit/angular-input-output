import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {

  @Input() count: number = 0
  @Output() change: EventEmitter<number> = new EventEmitter<number>()
  constructor() { }

  addBtn() {
    this.count++
    this.change.emit(this.count)
  }
  removeBtn() {
    this.count--
    this.change.emit(this.count)
  }
}

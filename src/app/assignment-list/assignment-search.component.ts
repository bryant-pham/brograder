import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'assignment-search',
  template: require('./assignment-search.html'),
})
export class AssignmentSearch implements OnInit {
  @Output() input = new EventEmitter();

  ngOnInit() {
    this.input.emit({value: ''});
  }

  handleInput(event): void {
    this.input.emit({value: event.target.value});
  }
}

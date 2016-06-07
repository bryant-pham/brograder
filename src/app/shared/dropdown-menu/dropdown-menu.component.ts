import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dropdown-menu',
  template: require('./dropdown-menu.html')
})
export class DropdownMenuComponent {
  @Input() inputData: Array<any>;
  @Input() displayAttribute: string;
  @Output() selected = new EventEmitter();
  
  handleSelection(data: any) {
    this.selected.emit({value: data});
  }
}

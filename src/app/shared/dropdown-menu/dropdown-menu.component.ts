import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dropdown-menu',
  template: require('./dropdown-menu.html')
})
export class DropdownMenuComponent {
  @Input() inputData: Array<any>;
  @Input() displayAttribute: string;
  @Input() label: string;
  @Output() selected = new EventEmitter();

  selectedValue: any;

  handleSelection() {
    this.selected.emit({value: this.selectedValue});
  }
}

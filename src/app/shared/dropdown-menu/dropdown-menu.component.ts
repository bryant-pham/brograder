import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dropdown-menu',
  template: require('./dropdown-menu.html')
})
export class DropdownMenuComponent implements OnInit {
  @Input() inputData: Array<any>;
  @Input() displayAttribute: string;
  @Input() label: string;
  @Input() isObject: boolean = false;
  @Output() selected = new EventEmitter();

  selectedValue: any;

  ngOnInit() {
    if (this.inputData.length > 0) {
      this.selectedValue = this.inputData[0];
      this.handleSelection();
    }
  }

  getDisplayValue(data): string {
    if (this.isObject) {
      return data[this.displayAttribute];
    }
    return data;
  }

  handleSelection() {
    this.selected.emit({value: this.selectedValue});
  }
}

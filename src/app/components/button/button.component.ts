import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonTitle: String | undefined;
  @Input() buttonColor: String | undefined;
  @Input() isDisabled: Boolean | undefined;

  @Output() buttonClickEvent = new EventEmitter();

  onClick(): void {
    this.buttonClickEvent.emit();
  }
}

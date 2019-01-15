import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-backdrop',
  template: `
    <div class="backdrop" (click)="backdropClick.emit()"></div>
  `,
  styles: [`
    .backdrop {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #000000;
      opacity: 0.2;
    }
  `]
})
export class PageBackdropComponent {
  @Output() backdropClick = new EventEmitter();
}

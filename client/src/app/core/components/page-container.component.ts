import { Component } from '@angular/core';

@Component({
  selector: 'app-page-container',
  template: `
    <div class="page__container">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .page__container {
      padding: 15px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  `]
})
export class PageContainerComponent {}

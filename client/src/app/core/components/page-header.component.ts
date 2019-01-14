import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `
    <mat-card>
      <mat-card-title>{{title}}</mat-card-title>
      <mat-card-subtitle *ngIf="subtitle">{{subtitle}}</mat-card-subtitle>
    </mat-card>
  `,
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class PageHeaderComponent {
  @Input() title;
  @Input() subtitle;
}

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card>
      <mat-card-title>404. Not Found</mat-card-title>
      <mat-card-content>
        <p>Ooops! Nothing here...</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" routerLink="/">Go Home</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      :host {
        text-align: center;
      }
    `,
  ],
})
export class NotFoundComponent {}

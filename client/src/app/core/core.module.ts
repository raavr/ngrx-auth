import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header.component';
import { PageContainerComponent } from './components/page-container.component';
import { MaterialModule } from '../material/material.module';
import { NotFoundComponent } from './components/not-found.component';
import { PageBackdropComponent } from './components/page-backdrop.component';

@NgModule({
  declarations: [
    PageContainerComponent, 
    PageHeaderComponent,
    NotFoundComponent,
    PageBackdropComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    PageContainerComponent,
    PageHeaderComponent,
    NotFoundComponent,
    PageBackdropComponent
  ]
})
export class CoreModule { }

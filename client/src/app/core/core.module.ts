import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header.component';
import { PageContainerComponent } from './components/page-container.component';
import { MaterialModule } from '../material/material.module';
import { NotFoundComponent } from './components/not-found.component';

@NgModule({
  declarations: [
    PageContainerComponent, 
    PageHeaderComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    PageContainerComponent,
    PageHeaderComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }

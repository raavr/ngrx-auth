import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    NavItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    StoreModule.forFeature('navbar', reducers),
  ],
  exports: [
    SidenavComponent,
    ToolbarComponent,
    NavItemComponent
  ]
})
export class NavbarModule { }

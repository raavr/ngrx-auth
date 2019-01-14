import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/services/auth.guard';
import { NotFoundComponent } from './core/components/not-found.component';

export const routes: Routes = [
  {
    path: 'accounts',
    loadChildren: './accounts/accounts.module#AccountsModule',
    canActivate: [
      AuthGuard
    ],
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

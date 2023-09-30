import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'layout',
    component: LayoutComponent
  },
  {
    path: 'printers',
    loadChildren: () => import('./printers/printers.module').then( m => m.PrintersModule)
  },
  {
    path:'**',
    redirectTo: 'layout'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

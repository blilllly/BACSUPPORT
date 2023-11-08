import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrintersComponent } from './pages/printers/printers.component';
import { RentComponent } from './pages/rent/rent.component';
import { SuppliesComponent } from './pages/supplies/supplies.component';
import { TechnicalServiceComponent } from './pages/technical-service/technical-service.component';
import { PrinterDetailsComponent } from './components/printer-details/printer-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'printers', component: PrintersComponent },
  { path: 'rent', component: RentComponent },
  { path: 'supplies', component: SuppliesComponent },
  { path: 'technical-service', component: TechnicalServiceComponent },
  { path: 'printer-details/:id', component: PrinterDetailsComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

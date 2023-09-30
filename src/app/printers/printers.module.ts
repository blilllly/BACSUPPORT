import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintersRoutingModule } from './printers-routing.module';
import { PrinterCardComponent } from './components/printer-card/printer-card.component';
import { PrintersComponent } from './pages/printers/printers.component';
import { RentComponent } from './pages/rent/rent.component';
import { SuppliesComponent } from './pages/supplies/supplies.component';
import { TechnicalServiceComponent } from './pages/technical-service/technical-service.component';


@NgModule({
  declarations: [
    PrinterCardComponent,
    PrintersComponent,
    RentComponent,
    SuppliesComponent,
    TechnicalServiceComponent
  ],
  imports: [
    CommonModule,
    PrintersRoutingModule
  ]
})
export class PrintersModule { }

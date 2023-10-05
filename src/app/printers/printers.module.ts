import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintersRoutingModule } from './printers-routing.module';
import { PrinterCardComponent } from './components/printer-card/printer-card.component';
import { PrintersComponent } from './pages/printers/printers.component';
import { RentComponent } from './pages/rent/rent.component';
import { SuppliesComponent } from './pages/supplies/supplies.component';
import { TechnicalServiceComponent } from './pages/technical-service/technical-service.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';


@NgModule({
  declarations: [
    PrinterCardComponent,
    PrintersComponent,
    RentComponent,
    SuppliesComponent,
    TechnicalServiceComponent,
    TestimonialCardComponent
  ],
  imports: [
    CommonModule,
    PrintersRoutingModule
  ],
  exports: [
    PrinterCardComponent
  ]
})
export class PrintersModule { }

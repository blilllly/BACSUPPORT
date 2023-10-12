import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintersRoutingModule } from './printers-routing.module';
import { PrinterCardComponent } from './components/printer-card/printer-card.component';
import { PrintersComponent } from './pages/printers/printers.component';
import { RentComponent } from './pages/rent/rent.component';
import { SuppliesComponent } from './pages/supplies/supplies.component';
import { TechnicalServiceComponent } from './pages/technical-service/technical-service.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { TestimonialCarouselComponent } from './components/testimonial-carousel/testimonial-carousel.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PrinterCarouselComponent } from './components/printer-carousel/printer-carousel.component';


@NgModule({
  declarations: [
    PrinterCardComponent,
    PrintersComponent,
    RentComponent,
    SuppliesComponent,
    TechnicalServiceComponent,
    TestimonialCardComponent,
    TestimonialCarouselComponent,
    PrinterCarouselComponent
  ],
  imports: [
    CommonModule,
    PrintersRoutingModule,
    PrimeNgModule
  ],
  exports: [
    PrinterCardComponent
  ]
})
export class PrintersModule { }

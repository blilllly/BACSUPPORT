import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PrintersComponent } from './pages/printers/printers.component';
import { RentComponent } from './pages/rent/rent.component';
import { SuppliesComponent } from './pages/supplies/supplies.component';
import { TechnicalServiceComponent } from './pages/technical-service/technical-service.component';
import { BrandsCarouselComponent } from './components/brands-carousel/brands-carousel.component';
import { PrinterCardComponent } from './components/printer-card/printer-card.component';
import { PrinterCarouselComponent } from './components/printer-carousel/printer-carousel.component';
import { PrinterDetailsComponent } from './components/printer-details/printer-details.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { TestimonialCarouselComponent } from './components/testimonial-carousel/testimonial-carousel.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrintersComponent,
    RentComponent,
    SuppliesComponent,
    TechnicalServiceComponent,
    BrandsCarouselComponent,
    PrinterCardComponent,
    PrinterCarouselComponent,
    PrinterDetailsComponent,
    TestimonialCardComponent,
    TestimonialCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PrimeNgModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

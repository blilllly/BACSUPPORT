import { NgModule } from '@angular/core';

import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';


@NgModule({
  exports: [
    CarouselModule,
    DialogModule,
    ButtonModule
  ]
})
export class PrimeNgModule { }

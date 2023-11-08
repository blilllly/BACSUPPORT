import { Component } from '@angular/core';
import { Printer } from 'src/app/interfaces/printer.interface';
import { PrintersService } from 'src/app/services/printers.service';

interface ResponsiveOptions {
  breakpoint: string,
  numVisible: number,
  numScroll: number
}

@Component({
  selector: 'app-printer-carousel',
  templateUrl: './printer-carousel.component.html',
  styleUrls: ['./printer-carousel.component.css']
})
export class PrinterCarouselComponent {

  printers: Printer[] = [];

  constructor(private printersService: PrintersService) {}

  ngOnInit(): void {
    this.printersService.getPrinters()
      .subscribe( data => {
        this.printers = data;
      });
  }

  responsiveOptions: ResponsiveOptions[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '576px',
        numVisible: 1,
        numScroll: 1
    }
  ]

}

import { Component, OnInit } from '@angular/core';
import { Printer } from '../../interfaces/printer.interface';
import { PrintersService } from '../../services/printers.service';

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
export class PrinterCarouselComponent implements OnInit{

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

import { Component, Input } from '@angular/core';
import { Printer } from '../../interfaces/product.interface';

@Component({
  selector: 'app-printer-card',
  templateUrl: './printer-card.component.html',
  styleUrls: ['./printer-card.component.css']
})
export class PrinterCardComponent {
  @Input() printer!: Printer;
}

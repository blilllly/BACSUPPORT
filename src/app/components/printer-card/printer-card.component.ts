import { Component, Input } from '@angular/core';
import { Printer } from 'src/app/interfaces/printer.interface';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-printer-card',
  templateUrl: './printer-card.component.html',
  styleUrls: ['./printer-card.component.css']
})
export class PrinterCardComponent {
  @Input() printer!: Printer;

  constructor(private comunicacionService: ComunicacionService) {}

  scroll() {
    this.comunicacionService.scrollToComponent();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Printer } from '../../interfaces/printer.interface';
import { ComunicacionService } from '../../services/comunicacion.service';

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

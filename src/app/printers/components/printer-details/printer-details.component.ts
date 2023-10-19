import { Component, OnInit } from '@angular/core';
import { Printer } from '../../interfaces/printer.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PrintersService } from '../../services/printers.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-printer-details',
  templateUrl: './printer-details.component.html',
  styleUrls: ['./printer-details.component.css']
})
export class PrinterDetailsComponent implements OnInit {

  printer!: Printer;

  constructor (
    private activatedRoute: ActivatedRoute,
    private printersService: PrintersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = +params['id']; // Convierte el parámetro 'id' en un número

      this.printersService.getPrinterXId(id).subscribe({
        next: (printer: Printer) => {
          this.printer = printer;
        },
        error: (error) => {
          console.error(error); // Maneja errores aquí si es necesario
        }
      });
    });
  }


}

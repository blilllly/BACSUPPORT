import { Component, ElementRef } from '@angular/core';
import { Printer } from '../../interfaces/printer.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PrintersService } from '../../services/printers.service';
import { ComunicacionService } from '../../services/comunicacion.service';

@Component({
  selector: 'app-printer-details',
  templateUrl: './printer-details.component.html',
  styleUrls: ['./printer-details.component.css']
})
export class PrinterDetailsComponent {

  printer!: Printer;

  constructor (
    private activatedRoute: ActivatedRoute,
    private printersService: PrintersService,
    private router: Router,
    private el: ElementRef,
    private comunicacionService: ComunicacionService
  ) {}

  ngAfterViewInit() {
    setTimeout(() => {
      const element = this.el.nativeElement;
      element.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        const id = +params['id'];

        this.printersService.getPrinterXId(id)
          .subscribe({
            next: (printer: Printer) => {
              this.printer = printer;
            },
            error: (error) => {
              console.error(error);
            }
          });
      });
  }

  regresar() {
    this.router.navigate(['/layout'])
  }

}

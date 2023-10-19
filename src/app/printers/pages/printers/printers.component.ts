import { Component } from '@angular/core';
import { Numero } from '../../interfaces/printer.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-printers',
  templateUrl: './printers.component.html',
  styleUrls: ['./printers.component.css']
})
export class PrintersComponent {

  numero1: Numero = environment.numero1;
  numero2: Numero = environment.numero2;
  correo: string = environment.correo;

}

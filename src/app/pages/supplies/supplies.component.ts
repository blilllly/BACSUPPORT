import { Component } from '@angular/core';
import { Numero } from 'src/app/interfaces/printer.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent {
  numero1: Numero = environment.numero1;
  numero2: Numero = environment.numero2;
  correo: string = environment.correo;
}

import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  NavBarMenu: MenuItem[]= [
    { texto: 'inicio', ruta: 'layout' },
    { texto: 'impresoras', ruta: './printers/printers' },
    { texto: 'alquiler de impresoras', ruta: './printers/rent' },
    { texto: 'servicio técnico', ruta: './printers/technical-service' },
    { texto: 'repuestos y suministros', ruta: './printers/supplies' }
  ];
}

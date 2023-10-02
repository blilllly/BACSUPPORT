import { Component } from '@angular/core';

interface MenuItem {
  subId?: string;
  texto: string;
  subItems?: string;
  ruta?: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  NavBarMenu: MenuItem[]= [
    { texto: 'inicio', ruta: 'layout' },
    { texto: 'impresoras', subItems: '1' },
    { texto: 'servicio técnico',ruta: './printers/technical-service' },
    { texto: 'repuestos y suministros', ruta: './printers/supplies' }
  ];

  SubItems: MenuItem[] = [
    {subId: '1', texto: 'Venta', ruta: './printers/printers'},
    {subId: '1', texto: 'Alquiler', ruta: './printers/rent'}
  ]
}

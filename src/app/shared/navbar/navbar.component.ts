import { Component } from '@angular/core';

interface MenuItem {
  subId?: string;
  texto: string;
  subItems?: string;
  ruta?: string;
  emoji?: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  NavBarMenu: MenuItem[]= [
    { texto: 'inicio', ruta: 'layout', emoji: 'ri-home-2-line' },
    { texto: 'impresoras', subItems: '1', emoji: 'ri-printer-line' },
    { texto: 'servicio técnico',ruta: './printers/technical-service', emoji: 'ri-tools-fill'},
    { texto: 'repuestos y suministros', ruta: './printers/supplies', emoji: 'ri-shopping-bag-line' }
  ];

  SubItems: MenuItem[] = [
    {subId: '1', texto: 'Venta', ruta: './printers/printers'},
    {subId: '1', texto: 'Alquiler', ruta: './printers/rent'}
  ]
}

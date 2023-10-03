import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  subItems?: MenuItem[];
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
    { texto: 'impresoras', emoji: 'ri-printer-line', subItems: [
        { texto: 'venta', ruta: './printers/printers'},
        { texto: 'alquiler', ruta: './printers/rent'},
      ]
    },
    { texto: 'servicio técnico',ruta: './printers/technical-service', emoji: 'ri-tools-fill'},
    { texto: 'repuestos y suministros', ruta: './printers/supplies', emoji: 'ri-shopping-bag-line' }
  ];

}

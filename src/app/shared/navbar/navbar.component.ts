import { Component, Renderer2 } from '@angular/core';
import { Numero } from 'src/app/printers/interfaces/printer.interface';
import { environment } from 'src/environments/environment';

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

  numero1: Numero = environment.numero1;
  numero2: Numero = environment.numero2;
  correo: string = environment.correo;

  constructor(private renderer: Renderer2) {}

  closeNavbar() {
    const navbar = document.querySelector('.navbar-collapse');
    this.renderer.removeClass(navbar, 'show');
  }

  NavBarMenu: MenuItem[]= [
    { texto: 'inicio', ruta: 'layout', emoji: 'ri-home-2-line' },
    { texto: 'impresoras', emoji: 'ri-printer-line', subItems: [
        { texto: 'venta', ruta: './printers/printers', emoji: 'ri-store-3-fill'},
        { texto: 'alquiler', ruta: './printers/rent', emoji: 'ri-money-dollar-circle-line'},
      ]
    },
    { texto: 'servicio técnico',ruta: './printers/technical-service', emoji: 'ri-tools-fill'},
    { texto: 'repuestos y suministros', ruta: './printers/supplies', emoji: 'ri-shopping-bag-line' }
  ];

}

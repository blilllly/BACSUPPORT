import { Component } from '@angular/core';
import { Printer } from '../printers/interfaces/printer.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  printers: Printer[]=[
    {
      marca: 'RICOH',
      modelo: 'MP 301',
      descrip_corta: 'Alto rendimiento diseñada para entornos de oficina ocupados que requieren una impresión rápida y confiable en blanco y negro.',
      descripcion: 'La Ricoh MP 301 es una impresora multifuncional blanco y negro que ofrece funciones de impresión, copiado y escaneo. Tiene una velocidad de impresión de hasta 30 páginas por minuto y una capacidad de papel de hasta 500 hojas en su bandeja.',
      alt_img: 'https://www.sercopilevante.com/wp-content/uploads/2019/06/mp301.jpg',
      v_impresion: '30',
      dimensiones: '476 x 450 x 505 mm',
      peso: '28 kg'
    },
    {
      marca: 'RICOH',
      modelo: 'MP C4503',
      descrip_corta: 'Impresora multifuncional a color de alto rendimiento que brinda una impresión rápida y de alta calidad para entornos de oficina exigentes.',
      descripcion: ' La Ricoh MP C4503 es una impresora multifuncional a color que ofrece funciones de impresión, copiado y escaneo. Tiene una velocidad de impresión de hasta 45 páginas por minuto y una capacidad de papel enorme.',
      alt_img: 'https://telcomplus.com.ec/wp-content/uploads/2022/03/Copiadora-Ricoh-Aficio-MP-C4503.jpg',
      v_impresion: '45',
      dimensiones: '587 x 685 x 963 mm',
      peso: '102 kg'
    },
    {
      marca: 'RICOH',
      modelo: 'MP C4000',
      descrip_corta: 'Impresora multifuncional a color versátil y de alto rendimiento que satisface las demandas de impresión y copiado en entornos de oficina de gran actividad.',
      descripcion: ' La Ricoh MP C4000 es una impresora multifuncional a color que ofrece funciones de impresión, copiado y escaneo. Ofrece una velocidad de impresión de hasta 40 páginas por minuto y con una buena capacidad de papel.',
      alt_img: 'https://www.abdofficesolutions.com/cdn/shop/products/Ricoh_Aficio_MP_C3500_C4500_C5000_1.jpg?v=1548436508',
      v_impresion: '40',
      dimensiones: '670 x 677 x 760 mm',
      peso: '87 kg'
    },
  ]
}

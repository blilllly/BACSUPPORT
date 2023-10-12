import { Component } from '@angular/core';
import { Printer } from '../../interfaces/printer.interface';

interface ResponsiveOptions {
  breakpoint: string,
  numVisible: number,
  numScroll: number
}

@Component({
  selector: 'app-printer-carousel',
  templateUrl: './printer-carousel.component.html',
  styleUrls: ['./printer-carousel.component.css']
})
export class PrinterCarouselComponent {

  responsiveOptions: ResponsiveOptions[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '576px',
        numVisible: 1,
        numScroll: 1
    }
  ]

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
      descripcion: 'La Ricoh MP C4503 es una impresora multifuncional a color que ofrece funciones de impresión, copiado y escaneo. Tiene una velocidad de impresión de hasta 45 páginas por minuto y una capacidad de papel enorme.',
      alt_img: 'https://telcomplus.com.ec/wp-content/uploads/2022/03/Copiadora-Ricoh-Aficio-MP-C4503.jpg',
      v_impresion: '45',
      dimensiones: '587 x 685 x 963 mm',
      peso: '102 kg'
    },
    {
      marca: 'RICOH',
      modelo: 'MP C4000',
      descrip_corta: 'Impresora multifuncional a color versátil y de alto rendimiento que satisface las demandas de impresión y copiado en entornos de oficina de gran actividad.',
      descripcion: 'La Ricoh MP C4000 es una impresora multifuncional a color que ofrece funciones de impresión, copiado y escaneo. Ofrece una velocidad de impresión de hasta 40 páginas por minuto y con una buena capacidad de papel.',
      alt_img: 'https://www.abdofficesolutions.com/cdn/shop/products/Ricoh_Aficio_MP_C3500_C4500_C5000_1.jpg?v=1548436508',
      v_impresion: '40',
      dimensiones: '670 x 677 x 760 mm',
      peso: '87 kg'
    },
    {
      marca: 'RICOH',
      modelo: 'MP C2503',
      descrip_corta: 'Impresora multifuncional a color compacta y eficiente que brinda impresiones de alta calidad a una velocidad óptima.',
      descripcion: 'La Ricoh MP C2503 es una impresora multifuncional a color que ofrece funciones de impresión, copiado y escaneo. Tiene una velocidad de impresión de hasta 25 páginas por minuto y una considerable capacidad de papel.',
      alt_img: 'data:image/jpeg;base64,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',
      v_impresion: '25',
      dimensiones: '587 x 685 x 963 mm',
      peso: '101 kg'
    }
  ]

}
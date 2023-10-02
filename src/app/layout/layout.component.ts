import { Component } from '@angular/core';
import { Printer } from '../printers/interfaces/product.interface';

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
      descrip_corta: 'Las MP 301SP/MP 301SPF son multifuncionales A4 B/N rápidas y con un diseño compacto.',
      descripcion: 'Las MP 301SP/MP 301SPF son multifuncionales A4 B/N rápidas y con un diseño compacto. Ofrecen avanzadas funciones de impresión, copia, escaneo y fax, disponibles a través de una gran pantalla táctil en color de 4,3 pulgadas. Estos innovadores dispositivos pueden reemplazar sin problemas varios dispositivos de una sola función y mejorar el flujo de trabajo. Sus reducidas dimensiones le permiten tener más espacio en la oficina. El controlador de próxima generación de Ricoh (GWNX) también le ofrece excelentes funcionalidades de gestión de dispositivos.',
      alt_img: 'https://www.solutecjm.com/1-medium_default/ricoh-mp-301.jpg',
      tm_calentamiento: '23 segundos',
      v_p_impresion: '6 segundos',
      v_impresion_c: '30 páginas por minuto',
      dimensiones: '476 x 450 x 451 mm',
      peso: '26 kg'
    },
    {
      marca: 'RICOH',
      modelo: 'MP C4503',
      descrip_corta: 'Optimice la productividad de su oficina con las RICOH MP C4503.',
      descripcion: 'Optimice la productividad de su oficina con las RICOH MP C4503. Estas rápidas y fiables impresoras multifuncionales de color son perfectas para realizar muchas tareas de oficina. Podrá imprimir, copiar y escanear a gran velocidad y tendrá más tiempo para otras tareas. Sus opciones de acabado profesional le permiten producir documentos atractivos sin salir de su oficina.',
      alt_img: 'https://www.solutecjm.com/13-medium_default/ricoh-mp-c4503.jpg',
      tm_calentamiento: '20 segundos',
      v_p_impresion: 'A todo color: 5,7 segundos B/N: 4 segundos',
      v_impresion_c: 'A todo color: 45 páginas por minuto B/N: 45 páginas por minuto',
      dimensiones: '(An x La x Al): 587 x 685 x 963 mm',
      peso: '100kg'
    },
    {
      marca: 'RICOH',
      modelo: 'MP C3503',
      descrip_corta: 'Transforme la productividad de su oficina con las impresoras multifuncionales de color MP C3503 de Ricoh.',
      descripcion: 'Transforme la productividad de su oficina con las impresoras multifuncionales de color MP C3503 de Ricoh. Aumente la eficiencia de sus procesos con una impresión rápida y de alta calidad y completas funciones de manejo del papel. Imprima grandes cantidades de documentos con imágenes de forma profesional gracias a sus excelentes funciones de gestión y coincidencia del color, y a su impresión de una calidad superior.',
      alt_img: 'https://www.solutecjm.com/20-medium_default/ricoh-mp-c3503.jpg',
      tm_calentamiento: '19 segundos',
      v_p_impresion: 'A todo color: 7,1 segundos B/N: 4,6 segundos',
      v_impresion_c: 'A todo color: 35 páginas por minuto B/N: 35 páginas por minuto',
      memoria: 'Estándar: 1,5 GB Máximo: 2 GB',
      disco: '250 GB',
      dimensiones: '(An x La x Al): 587 x 685 x 913 mm',
      peso: '93,2 kg'
    },
    {
      marca: 'RICOH',
      modelo: 'MP 4054',
      descrip_corta: 'Los equipos RICOH MP 4054 de blanco y negro están diseñados para entornos exigentes en oficinas medianas y grandes.',
      descripcion: 'Los equipos RICOH MP 4054 de blanco y negro están diseñados para entornos exigentes en oficinas medianas y grandes. Estos MFP le ayudan a imprimir, copiar y compartir documentos para una mayor comodidad. Haga un seguimiento de la actividad del usuario, el consumo de energía y los costes operativos con las potentes herramientas de administración que incorporan.',
      alt_img: 'https://www.solutecjm.com/6-medium_default/ricoh-mp-4054.jpg',
      tm_calentamiento: '14 segundos',
      v_p_impresion: '4 segundos',
      v_impresion_c: '40 páginas por minuto.',
      memoria: '2 GB',
      disco: '320 GB',
      dimensiones: '(An x La x Al): Con ARDF: 587 x 680 x 913 mm',
      peso: '68,5 kg'
    },
    {
      marca: 'RICOH',
      modelo: 'MP 5054',
      descrip_corta: 'Los equipos RICOH MP 5054 de blanco y negro están diseñados para entornos exigentes en oficinas medianas y grandes.',
      descripcion: 'Los equipos RICOH MP 5054 de blanco y negro están diseñados para entornos exigentes en oficinas medianas y grandes. Estos MFP le ayudan a imprimir, copiar y compartir documentos para una mayor comodidad. Haga un seguimiento de la actividad del usuario, el consumo de energía y los costes operativos con las potentes herramientas de administración que incorporan.',
      alt_img: 'https://www.solutecjm.com/12-medium_default/ricoh-mp-4054.jpg',
      tm_calentamiento: '14 segundos',
      v_p_impresion: '2.9 segundos',
      v_impresion_c: '50 páginas por minuto.',
      memoria: '2 GB',
      disco: '320 GB',
      dimensiones: '(An x La x Al): Con ARDF: 587 x 680 x 913 mm',
      peso: '68,5 kg'
    },
    {
      marca: 'RICOH',
      modelo: 'MP C5503',
      descrip_corta: 'Optimice la productividad de su oficina con las RICOH MP C5503.',
      descripcion: 'Los equipos RICOH MP 4054 de blanco y negro están diseñados para entornos exigentes en oficinas medianas y grandes. Estos MFP le ayudan a imprimir, copiar y compartir documentos para una mayor comodidad. Haga un seguimiento de la actividad del usuario, el consumo de energía y los costes operativos con las potentes herramientas de administración que incorporan.',
      alt_img: 'https://www.solutecjm.com/16-medium_default/ricoh-mp-c4503.jpg',
      tm_calentamiento: '14 segundos',
      v_p_impresion: '4 segundos',
      v_impresion_c: '40 páginas por minuto.',
      memoria: '2 GB',
      disco: '320 GB',
      dimensiones: '(An x La x Al): Con ARDF: 587 x 680 x 913 mm',
      peso: '68,5 kg'
    },
    {
      marca: 'RICOH',
      modelo: 'MP 4054',
      descrip_corta: 'Los equipos RICOH MP 4054 de blanco y negro están diseñados para entornos exigentes en oficinas medianas y grandes.',
      descripcion: 'Los equipos RICOH MP 4054 de blanco y negro están diseñados para entornos exigentes en oficinas medianas y grandes. Estos MFP le ayudan a imprimir, copiar y compartir documentos para una mayor comodidad. Haga un seguimiento de la actividad del usuario, el consumo de energía y los costes operativos con las potentes herramientas de administración que incorporan.',
      alt_img: 'https://www.solutecjm.com/6-medium_default/ricoh-mp-4054.jpg',
      tm_calentamiento: '14 segundos',
      v_p_impresion: '4 segundos',
      v_impresion_c: '40 páginas por minuto.',
      memoria: '2 GB',
      disco: '320 GB',
      dimensiones: '(An x La x Al): Con ARDF: 587 x 680 x 913 mm',
      peso: '68,5 kg'
    },
  ]
}

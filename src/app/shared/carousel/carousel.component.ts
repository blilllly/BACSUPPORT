import { Component } from '@angular/core';

interface Images{
  titulo: string;
  descripcion: string;
  ruta: string;
  active?: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  Imagenes: Images[] = [
    {titulo: 'Sofisticado Equipo de Oficina', descripcion: 'Venta de impresoras de primer nivel para cualquier tipo de trabajo', ruta: 'https://blilllly.github.io/images/bacsupport/ricoh3.jpg'},
    {titulo: 'La Más Alta Calidad', descripcion: 'Resolución adecuada para copias e impresiones', ruta: 'https://blilllly.github.io/images/bacsupport/ricoh2.jpeg'},
    {titulo: 'Renta de Impresoras', descripcion: 'Capacidad para suplir las demandas más exigentes de los negocios', ruta: 'https://blilllly.github.io/images/bacsupport/ricoh1.jpg'},
    {titulo: 'Servicio Técnico Especializado', descripcion: 'Técnicos capaces de solucionar cualquier problema', ruta: 'https://blilllly.github.io/images/bacsupport/technical-service.jpg'},
    {titulo: 'Repuestos y Suministros', descripcion: 'Amplio stock de varios modelos', ruta: 'https://blilllly.github.io/images/bacsupport/supplies.jpg'}
  ]
}

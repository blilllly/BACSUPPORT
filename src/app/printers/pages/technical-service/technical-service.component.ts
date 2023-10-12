import { Component } from '@angular/core';
import { Testimony } from '../../interfaces/printer.interface';

@Component({
  selector: 'app-technical-service',
  templateUrl: './technical-service.component.html',
  styleUrls: ['./technical-service.component.css']
})
export class TechnicalServiceComponent {

  testimonials: Testimony[] = [
    {
      score: 5,
      title: 'Excelente Servicio',
      prg: 'Excelente servicio técnico de impresoras RICOH. Los llamé en un momento de crisis, y respondieron rápidamente. Repararon nuestra impresora y nos ayudaron a evitar costosas interrupciones en nuestro flujo de trabajo. ¡Muy recomendados!',
      img: '../../../../assets/images/people/LuisaGomez.jpg',
      name: 'Luisa Gómez',
      job: 'Grte. de Operaciones'
    },
    {
      score: 5,
      title: 'Confianza Ganada',
      prg: 'Esta empresa ha ganado nuestra confianza plenamente. Cuando se trata de nuestras impresoras RICOH, no confiamos en nadie más. Su servicio técnico siempre es confiable y eficiente, y sabemos que siempre podemos contar con ellos.',
      img: '../../../../assets/images/people/RobertoFernandez.jpg',
      name: 'Roberto Fernández',
      job: 'CEO de Pequeña Empresa'
    },
    {
      score: 5,
      title: 'Más que un Servicio',
      prg: 'Este servicio técnico es más que un simple servicio. Se preocupan genuinamente por el bienestar de nuestras impresoras y están comprometidos en mantenerlas en perfecto estado. Su enfoque en el mantenimiento preventivo ha ahorrado a nuestro negocio tiempo y dinero.',
      img: '../../../../assets/images/people/MariaRodriguez.jpg',
      name: 'María Rodríguez',
      job: 'Directora de Marketing'
    },
    {
      score: 5,
      title: 'Imprescindibles',
      prg: 'Estos chicos son imprescindibles para nuestro negocio. Siempre están ahí cuando los necesitamos, listos para solucionar cualquier problema de impresión que enfrentemos. Gracias a ellos, nuestras operaciones nunca se detienen.',
      img: '../../../../assets/images/people/LauraSanchez.jpg',
      name: 'Laura Sánchez',
      job: 'Coordinadora de Oficina'
    },
    {
      score: 5,
      title: 'Máxima Calidad',
      prg: 'La calidad del servicio técnico que ofrece esta empresa es incomparable. Sus técnicos son expertos en impresoras RICOH, y siempre dejan mi impresora en condiciones óptimas. No puedo pedir más.',
      img: '../../../../assets/images/people/CarlosLopez.jpg',
      name: 'Carlos López',
      job: 'Director de Ventas'
    },
    {
      score: 5,
      title: 'Mejor Elección',
      prg: 'Elegir a esta empresa para el servicio técnico de nuestras impresoras RICOH fue la mejor decisión que tomamos. Son confiables, eficientes y siempre están dispuestos a ayudar. No cambiaríamos por nada.',
      img: '../../../../assets/images/people/AnaMorales.jpg',
      name: 'Ana Morales',
      job: 'Grte. de RRHH'
    },
    {
      score: 5,
      title: 'Servicio Destacado',
      prg: 'Este servicio técnico se destaca por encima de todos los demás. Su atención al cliente es excepcional, y siempre se esfuerzan por superar nuestras expectativas. Los recomiendo encarecidamente.',
      img: '../../../../assets/images/people/AmyAuria.jpg',
      name: 'Amy Auria',
      job: 'Grte. de Finanzas'
    }
  ]

}

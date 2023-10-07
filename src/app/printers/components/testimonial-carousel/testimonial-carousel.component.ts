import { Component } from '@angular/core';
import { Testimony } from '../../interfaces/printer.interface';

interface ResponsiveOptions {
  breakpoint: string,
  numVisible: number,
  numScroll: number
}

@Component({
  selector: 'app-testimonial-carousel',
  templateUrl: './testimonial-carousel.component.html',
  styleUrls: ['./testimonial-carousel.component.css']
})
export class TestimonialCarouselComponent {

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
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
  ]

  testimonials: Testimony[] = [
    {
      score: 5,
      title: 'Excelente Servicio',
      prg: 'Amet reprehenderit ut do consectetur non sit consequat elit exercitation voluptate. Reprehenderit ullamco proident incididunt quis pariatur Lorem anim do id cupidatat cillum culpa. Pariatur sint dolore aute irure anim deserunt do enim non ea occaecat labore. Ut duis quis irure velit.',
      img: 'https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds',
      name: 'Pepito Perez',
      job: 'Gerente de Sistemas'
    },
    {
      score: 4.5,
      title: 'Excelente Servicio',
      prg: 'Amet reprehenderit ut do consectetur non sit consequat elit exercitation voluptate. Reprehenderit ullamco proident incididunt quis pariatur Lorem anim do id cupidatat cillum culpa. Pariatur sint dolore aute irure anim deserunt do enim non ea occaecat labore. Ut duis quis irure velit.',
      img: 'https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds',
      name: 'Pepito Perez',
      job: 'Gerente de Sistemas'
    },
    {
      score: 5,
      title: 'Excelente Servicio',
      prg: 'Amet reprehenderit ut do consectetur non sit consequat elit exercitation voluptate. Reprehenderit ullamco proident incididunt quis pariatur Lorem anim do id cupidatat cillum culpa. Pariatur sint dolore aute irure anim deserunt do enim non ea occaecat labore. Ut duis quis irure velit.',
      img: 'https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds',
      name: 'Pepito Perez',
      job: 'Gerente de Sistemas'
    },
    {
      score: 3.5,
      title: 'Excelente Servicio',
      prg: 'Amet reprehenderit ut do consectetur non sit consequat elit exercitation voluptate. Reprehenderit ullamco proident incididunt quis pariatur Lorem anim do id cupidatat cillum culpa. Pariatur sint dolore aute irure anim deserunt do enim non ea occaecat labore. Ut duis quis irure velit.',
      img: 'https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds',
      name: 'Pepito Perez',
      job: 'Gerente de Sistemas'
    },
    {
      score: 4,
      title: 'Excelente Servicio',
      prg: 'Amet reprehenderit ut do consectetur non sit consequat elit exercitation voluptate. Reprehenderit ullamco proident incididunt quis pariatur Lorem anim do id cupidatat cillum culpa. Pariatur sint dolore aute irure anim deserunt do enim non ea occaecat labore. Ut duis quis irure velit.',
      img: 'https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds',
      name: 'Pepito Perez',
      job: 'Gerente de Sistemas'
    },
  ]

}

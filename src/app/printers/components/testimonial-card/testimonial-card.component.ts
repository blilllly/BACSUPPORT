import { Component } from '@angular/core';

interface Testimony {
  score: number;
  title: string;
  prg: string;
  img: string;
  name: string;
  job: string;
}

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.css']
})
export class TestimonialCardComponent {

  testimonials: Testimony[] = [
    {
      score: 5,
      title: 'Excelente Servicio',
      prg: 'Amet reprehenderit ut do consectetur non sit consequat elit exercitation voluptate. Reprehenderit ullamco proident incididunt quis pariatur Lorem anim do id cupidatat cillum culpa. Pariatur sint dolore aute irure anim deserunt do enim non ea occaecat labore. Ut duis quis irure velit.',
      img: 'https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds',
      name: 'Pepito Perez',
      job: 'Gerente de Sistemas'
    }
  ]

}

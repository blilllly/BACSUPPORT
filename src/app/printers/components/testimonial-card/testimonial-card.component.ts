import { Component, Input } from '@angular/core';
import { Testimony } from '../../interfaces/printer.interface';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.css']
})
export class TestimonialCardComponent {
  @Input() testimony!: Testimony;
}

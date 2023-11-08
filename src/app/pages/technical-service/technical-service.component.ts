import { Component } from '@angular/core';
import { Numero, Testimony } from 'src/app/interfaces/printer.interface';
import { TestimonialsService } from 'src/app/services/testimonials.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-technical-service',
  templateUrl: './technical-service.component.html',
  styleUrls: ['./technical-service.component.css']
})
export class TechnicalServiceComponent {

  numero1: Numero = environment.numero1;
  numero2: Numero = environment.numero2;
  correo: string = environment.correo;

  testimonials: Testimony[] = [];

  constructor ( private testimonialService: TestimonialsService) {}

  ngOnInit(): void {
    this.testimonialService.getTestimonials()
      .subscribe( testimonials => {
        this.testimonials = testimonials;
      });
  }

}

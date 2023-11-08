import { Component, OnInit } from '@angular/core';
import { Numero, Testimony } from '../interfaces/printer.interface';
import { TestimonialsService } from '../services/testimonials.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  numero1: Numero = environment.numero1;
  numero2: Numero = environment.numero2;
  correo: string = environment.correo;

  testimonials: Testimony[] = [];

  constructor ( private testimonialService: TestimonialsService ) {}

  ngOnInit(): void {
    this.testimonialService.getTestimonials()
      .subscribe( testimonials => {
        this.testimonials = testimonials;
      });
  }


  scrollToTop (){
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

}

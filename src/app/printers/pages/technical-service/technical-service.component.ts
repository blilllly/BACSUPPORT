import { Component, OnInit } from '@angular/core';
import { Testimony } from '../../interfaces/printer.interface';
import { TestimonialsService } from '../../services/testimonials.service';

@Component({
  selector: 'app-technical-service',
  templateUrl: './technical-service.component.html',
  styleUrls: ['./technical-service.component.css']
})
export class TechnicalServiceComponent implements OnInit{

  testimonials: Testimony[] = [];

  constructor ( private testimonialService: TestimonialsService) {}

  ngOnInit(): void {
    this.testimonialService.getTestimonials()
      .subscribe( testimonials => {
        this.testimonials = testimonials;
      });
  }

}

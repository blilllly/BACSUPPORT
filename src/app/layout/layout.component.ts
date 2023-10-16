import { Component, OnInit } from '@angular/core';
import { Testimony } from '../printers/interfaces/printer.interface';
import { TestimonialsService } from '../printers/services/testimonials.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

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

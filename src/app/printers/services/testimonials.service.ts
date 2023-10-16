import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Testimony } from '../interfaces/printer.interface';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor( private http: HttpClient) { }

  getTestimonials(): Observable<Testimony[]> {
    return this.http.get<Testimony[]>('assets/data/testimonials.json');
  }
}

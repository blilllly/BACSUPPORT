import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Printer } from '../interfaces/printer.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrintersService {

  constructor(private http: HttpClient) { }

  getPrinters(): Observable<Printer[]> {
    return this.http.get<Printer[]>('/assets/data/printers.json');
  }
}

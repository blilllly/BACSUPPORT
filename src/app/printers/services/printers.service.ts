import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Printer } from '../interfaces/printer.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrintersService {

  private baseUrl = 'assets/data/printers.json';

  constructor(private http: HttpClient) { }

  getPrinters(): Observable<Printer[]> {
    return this.http.get<Printer[]>(this.baseUrl);
  }

  getPrinterXId(id: number): Observable<Printer> {
    return this.http.get<Printer[]>(this.baseUrl)
      .pipe(
        map( (data: Printer[]) => {
          const printer = data.find( item => item.id == id);
          if ( printer ) { return printer ;}
          else { throw new Error('No se encontró printer con ID ${id}'); }
        })
      );
  }
}

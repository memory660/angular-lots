import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  constructor() { }

  getProducts(): Observable<any> {
    return of([{ name: "produit 1"}, { name: "produit 2"}]);
  }
}

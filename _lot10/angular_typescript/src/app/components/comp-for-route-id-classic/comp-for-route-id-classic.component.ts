import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-comp-for-route-id-classic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp-for-route-id-classic.component.html',
  styleUrl: './comp-for-route-id-classic.component.scss'
})
export class CompForRouteIdClassicComponent {
  private route = inject(ActivatedRoute);


  // Store the productId observable
  id$ = this.route.params.pipe(map(params => params['id']));

  /*
  productName$ = this.id$.pipe(
    // Fetch the product details when the productId changes
    // and cancel the previous request
    switchMap(id => this.productsService.getProduct(id)),
    map(product => product.name)
  );
  */


}

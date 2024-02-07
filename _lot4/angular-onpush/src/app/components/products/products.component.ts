import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductHttpService } from '../product-http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {


  products: any;

  constructor(private productHttpService: ProductHttpService) { }

  ngOnInit(): void {
    this.productHttpService.getProducts().subscribe((products: any) => {
      this.products = products;
      console.log(products);
    });
  }

  update1() {
    this.products[0].name = "parent : produit 1 modifié";
    this.products = { ...this.products };
  }

  update2() {
    this.products[1].name = "parent : produit 2 modifié";
  }
}

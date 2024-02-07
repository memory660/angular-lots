import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  @Input() product: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
  }

  update() {
    this.product.name = "enfant : produit modifié";
  }
}

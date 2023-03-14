import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../products.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'myorg-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  public subs: Subscription[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.subs.push(
      this.service.getAll().subscribe((result) => {
        this.products = result;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}

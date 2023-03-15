import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../products.models';

@Component({
  selector: 'myorg-product-card',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input() product: Product | null = null;
}

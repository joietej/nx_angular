import { Route } from '@angular/router';
import {BannerComponent} from "@myorg/common-ui";

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: BannerComponent
  },
  {
    path: 'products',
    loadChildren: () => import('@myorg/products').then((m) => m.ProductsModule),
  },
];

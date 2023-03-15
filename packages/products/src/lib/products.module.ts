import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routinng.module';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from "@angular/material/list";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {ProductCardComponent} from "./product-card/product-card.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [ProductsRoutingModule, CommonModule, HttpClientModule, MatListModule, MatButtonToggleModule, MatGridListModule, MatCardModule],
  declarations: [ProductCardComponent, ProductListComponent],
  exports: [ProductListComponent],
})
export class ProductsModule {}

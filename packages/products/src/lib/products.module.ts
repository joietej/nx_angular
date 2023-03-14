import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routinng.module';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from "@angular/material/list";
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@NgModule({
  imports: [ProductsRoutingModule, CommonModule, HttpClientModule, MatListModule, MatButtonToggleModule],
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
})
export class ProductsModule {}

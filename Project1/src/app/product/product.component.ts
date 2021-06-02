import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { prd_data } from './productData';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  prd1:Product=new Product(9001,'Apple','Chennai');
  prd:Product[];
  

  constructor() {
    this.prd = prd_data;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { prd_data } from './productData';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  prd:Product[];
  prd1:Product=new Product(9001,'Apple','Chennai');
  image1:string;
  image2:string;
  image3:string;
  img_h:number;
  img_w:number;

  constructor() {
    this.prd = prd_data;
    this.image1="data:image/jpeg;base64,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";
    this.image2="assets/img2.jpg";
    this.image3="assets/img3.jpg";
    this.img_h=400;
    this.img_w=300;

  }

  ngOnInit(): void {
  }

}

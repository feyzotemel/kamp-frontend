import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // product1:any={productId:1, productName:'bardak', categoryId:1, unitPrice:5,unitInStock:2}
  // product2:any={productId:2, productName:'bardak2', categoryId:1, unitPrice:5,unitInStock:2}
  // product3:any={productId:3, productName:'bardak3', categoryId:1, unitPrice:5,unitInStock:2}
  // product4:any={productId:4, productName:'bardak4', categoryId:1, unitPrice:5,unitInStock:2}
  // product5:any={productId:5, productName:'bardak5', categoryId:1, unitPrice:5,unitInStock:2}
  // products:Product[]=[
  //   this.product1,
  //   this.product2,
  //   this.product3,
  //   this.product4,
  //   this.product5
  // ]
  products:Product[]=[];
  constructor() { }

  ngOnInit(): void {
    
  }

}

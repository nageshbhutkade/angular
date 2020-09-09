import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  constructor(private productService: ProductService) {
    this.getProductlist();
   }

  ngOnInit() {
  }

  getProductlist(){
      this.productService.get().subscribe(data=>{
        debugger;
         this.products = data;
      });
  }
}

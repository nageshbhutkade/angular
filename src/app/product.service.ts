import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url='http://localhost:8000/'
  constructor(private http:HttpClient) { }

  // Bearer token Example Do not remove code
/* const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
const body = { title: 'Angular POST Request Example' }
this.http.post<any>('https://jsonplaceholder.typicode.com/posts', body, { headers }).subscribe(data => {
    this.postId = data.id;
}) */

  create(product){
    debugger;
    return this.http.post(this.url+'api/product', product);
  }


  get(){
    return this.http.get<any>(this.url+'api/product');
  }
}

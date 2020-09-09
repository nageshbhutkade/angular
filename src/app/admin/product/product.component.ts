import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/product.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  list: any;
  prodForm: FormGroup;
  datasaved = false;
  massage: string;
  categories:any;
  constructor(private formbuilder: FormBuilder, private productService: ProductService, private categoryService: CategoryService) { 

    this.categoryService.get().subscribe(data => {
      debugger;
      this.categories = data;
    })

  }

  ngOnInit() {
    this.setFormState();
    this.getList();
  }
  setFormState(): void {
    this.prodForm = this.formbuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: [null],
    })
  }

  onSubmit() {
    let product = this.prodForm.value;
    this.create(product);
    this.prodForm.reset();
  }

  create(product) {
    debugger;
    this.productService.create(product).subscribe(data => {
      debugger;
      this.prodForm.reset();
      this.getList();
    })

  }

  getList(){
    this.productService.get().subscribe(data => {
      this.list = data;
    })
  }


  fileUpload(event) {  
   /*  let image = files.item(0);
    this.prodForm.patchValue({
      image: image
    });  */

    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        // this.imageUrl = reader.result;
        this.prodForm.patchValue({
          image: reader.result
        });
        // this.editFile = false;
        // this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      // this.cd.markForCheck();        
    }
   }

  onFileChange(event) {
    debugger;
    let file = event.target.files[0];
    /* this.prodForm.patchValue({
      image: file
    }); */
    /* let reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.prodForm.patchValue({
          image: file
        });
        
        // need to run CD since file load runs outside of zone
        // this.cd.markForCheck();
      };
    } */
  }
  

}

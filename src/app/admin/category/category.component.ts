import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  list: any;
  catForm: FormGroup;
  datasaved = false;
  massage: string;
  constructor(private formbuilder: FormBuilder, private categoryService: CategoryService) { }

  ngOnInit() {
    this.setFormState();
    this.getList();
  }
  setFormState(): void {
    this.catForm = this.formbuilder.group({
      name: ['', [Validators.required]]
    })
  }

  onSubmit() {
    
    let category = this.catForm.value;
    this.creatcategory(category);
    this.catForm.reset();
  }

  creatcategory(category) {
    /* this.categoryService.creatcategory(category).subscribe(
      () => {
        this.datasaved = true;
        this.massage = "User Created";
       this.catForm.reset();
      }
    ) */

    this.categoryService.creatcategory(category).subscribe(data => {
      debugger;
      this.catForm.reset();
      this.getList();
    })

  }

  getList(){
    this.categoryService.get().subscribe(data => {
      this.list = data;
    })
  }

}

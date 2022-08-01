import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
    
  images : any = [];

  TodoTasksForm = this.fb.group({
    images:[''],
    title: [''],
    description: [''],
    date:[''],
    status : ['']
  });
  constructor(
    private fb: FormBuilder 
  ) { }

  ngOnInit(): void {
  }
   
  addTasks(){
   console.log(this.TodoTasksForm.value) 
  }
  openImagePopUp() {    
    document.getElementById('uploadImageUrl')?.click();
  }
   
  // getImages(event : any){
  //   console.log(event);
  //       if (event.target.files && event.target.files[0]) {
  //           var reader = new FileReader();
  //           reader.onload = (event: any) => {
  //               this.images = event.target.result;
  //           }
  //           reader.readAsDataURL(event.target.files[0]);
  //       }
  // }
}

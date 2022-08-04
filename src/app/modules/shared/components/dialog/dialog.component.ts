import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsertasksService } from 'src/app/services/usertasks.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.prod';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  images: any = [];
  actionBtn: string = 'Save'
  imageSrc: any;
  myFiles: any = [];
  updateOne: boolean = false;
  showTitle: string = 'Add Tasks'
  TodoTasksForm = this.fb.group({
    image: [''],
    title: [''],
    description: [''],
    targetDate: [''],
    status: ['']
  });
  constructor(
    private fb: FormBuilder,
    private tasksService: UsertasksService,
    private matSnackBar: MatSnackBar,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<UserListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {
    if (data) {
      this.showTitle = data.type;
      console.log(' this.showTitle', this.showTitle)
    }
  }

  baseImgUrl = environment.imageUrl;

  ngOnInit(): void {
    console.log(this.data, "this.data")
    if (this.data._id) {
      console.log(this.data._id, 'this.data._id')
      this.update()
    }
  }


  createTodo() {
    console.log(this.TodoTasksForm.value, 'this.TodoTasksForm.value')
    let frmData = new FormData();
    frmData.append('title', this.TodoTasksForm.value.title);
    frmData.append('description', this.TodoTasksForm.value.description);
    frmData.append('targetDate', this.TodoTasksForm.value.targetDate);
    frmData.append('status', this.TodoTasksForm.value.status);
    for (var i = 0; i < this?.myFiles?.length; i++) {
      frmData.append("image", this.myFiles[i]);
    }
    this.tasksService.createTodo(frmData).subscribe((data) => {
      console.log(data, 'Request Data');
      console.log(frmData, 'frmData')
      if (data.status == 200) {
        console.log("close modal");
        this.matSnackBar.open(
          'Added Tasks Successfully.',
          'Ok',
          {
            duration: 2500,

          }

        );
        this.dialog.closeAll();

      }
    },
      (err) => {
        console.log(err);
      }
    );
  }
  update() {
    this.actionBtn = 'Update'
    this.updateOne = true
    this.TodoTasksForm.patchValue({
      title: this.data.title,
      description: this.data.description,
      targetDate: this.data.targetDate,
      status: this.data.status,
      //image: this.data.image
    })
  }

  editTodo() {
    console.log("hello")
    this.tasksService.editTodo(this.TodoTasksForm.value, this.data._id).subscribe((data) => {
      console.log(data, 'data')
    }, err => {
      console.log(err)
    })
  }



  openImagePopUp() {
    document.getElementById('uploadImageUrl')?.click();
  }

  getImages(e: any) {
    const reader = new FileReader();
    for (let i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
    if (e.target.files && e.target.files.length) {
      console.log(e.target.files.length, 'e.target.files.length')
      this.myFiles.push(e.target.files);
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc = reader.result as string;
        console.log(this.imageSrc, 'this.imageSrc')

        this.TodoTasksForm.patchValue({
          fileSource: this.imageSrc
        });

      };
    }
  }

  deleteImage(index: any, img: any) {      
    this.images.splice(index, img);
    this.imageSrc = undefined;   
  }
}

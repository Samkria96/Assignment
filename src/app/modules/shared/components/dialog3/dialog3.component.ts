import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsertasksService } from 'src/app/services/usertasks.service';


@Component({
  selector: 'app-dialog3',
  templateUrl: './dialog3.component.html',
  styleUrls: ['./dialog3.component.css']
})
export class Dialog3Component implements OnInit {
  deletedId: any;

  constructor(
    private userTasksService : UsertasksService,
    private matSnackBar: MatSnackBar,
    public dialog: MatDialogRef<Dialog3Component>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }


  ngOnInit(): void {
    console.log(this.data,'data...')
    this.deletedId = this.data
  }
  
  deleteTask(){
    this.userTasksService.deleteTodo(this.deletedId).subscribe(
      {
         next:(res)=>{
          this.matSnackBar.open(
            'Delete Tasks Successfully.',
            'Ok',
            {duration: 2500,}          
          );          
         },
          error:()=>{
            this.matSnackBar.open(
              'Some Issues To Delete Task.',
              'Ok',
              {duration: 2500,}
            );
          }
         
      })

  }

}

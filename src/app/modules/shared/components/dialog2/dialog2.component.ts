import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsertasksService } from 'src/app/services/usertasks.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.css']
})
export class Dialog2Component implements OnInit {
    
  seeData : any =''
  viewId : any
  constructor(
    private userTasksService : UsertasksService,
    public dialog: MatDialogRef<Dialog2Component>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { } 

  baseImgUrl = environment.imageUrl;
  ngOnInit(): void {
    console.log(this.data,'data...')
    this.viewId = this.data
    this.viewData()        
  }
  
  viewData(){
    this.userTasksService.viewTodo(this.viewId).subscribe((res:any)=>{
      console.log(res,'data')
      this.seeData = res.data
      console.log(this.seeData,'this.seeData')
 })  
  }
}

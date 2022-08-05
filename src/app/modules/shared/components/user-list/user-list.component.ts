import { Component, OnInit , ViewChild ,AfterViewInit ,inject, TemplateRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsertasksService } from 'src/app/services/usertasks.service';
import { environment } from 'src/environments/environment.prod';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dialog2Component } from '../dialog2/dialog2.component';
import { Dialog3Component } from '../dialog3/dialog3.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent implements AfterViewInit , OnInit {
  previousPage: any;
  todoData:any[] = [];
  currentPage: any;
  count: any;
  p: number = 1;
  totalPage:any;
  actionBtn:string = 'Save'
  showTitle : string = 'Add Tasks ' 
  $: any; 
  searchValue:any;
  seeData : any   
  Img: any = '';

  displayedColumns: string[] = ['image', 'title', 'description', 'target-date','status','action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('openImage') openImage!: TemplateRef<any>;

  constructor(
    private dialog:MatDialog,
    private userTasksService : UsertasksService,
    private matSnackBar: MatSnackBar,
  
  )
  {}   
    
  
  baseImgUrl = environment.imageUrl;

  ngOnInit(): void {
    this.todoListing(1, 5,'');
  }
  ngAfterViewInit() { }

    addTask() {
     const dialogRef =  this.dialog.open(DialogComponent, {
       width:'auto',
       height : 'auto'
      });

      dialogRef.afterClosed().subscribe((res:any) => {
        this.todoListing(1,5, '')
      })
  }
  
  todoListing(page: number, limit: number, search:string){
    //console.log('hello');
    this.userTasksService.todoListing(page, limit, search).subscribe(
      (res: any) => {
        console.log(res, 'data');
        this.todoData = res?.data?.docs;
        console.log(this.todoData, 'hellooo.....');
        this.previousPage = res?.data?.prevPage;
        this.count = res?.data?.totalDocs;
        this.currentPage = res?.data?.page;
        this.totalPage = res?.data?.totalPages
      },
      (err) => {
        console.log(err);
      }
      );

    }

    getPage(event: any) {
      console.log('event', event);
      this.p = event;
      this.todoListing(1, 5, '');
    }  
   
  
    viewData(id:any  ){ 
      console.log(id , "get id ")     
    if(id){   
      this.dialog.open(Dialog2Component,{
      width:'600px',
      height: '600px',
      data:id
   })
    }
}

  editTodo(row:any){
    row.type='Edit Tasks'
    const dialogRef = this.dialog.open(DialogComponent,{
    height: 'auto',
      width: 'auto',
      data:row
  })  
  }

  searchtitle(e:any){
    console.log(e.target.value,'value...');
    this.searchValue = e.target.value;
    this.todoListing(1, 5, this.searchValue)
  }

  deleteTasks(id:any){   
    if(id){    
      const dialogRef = this.dialog.open(Dialog3Component,{
        height: '200px',
        width: '400px',
        data:id
      })

      dialogRef.afterClosed().subscribe((res:any) => {
        this.todoListing(1, 5,'');
      })
    }
  }
  viewImage(image:any){
    console.log(image, 'image...');
    this.Img = image;
    this.dialog.open(this.openImage, {
      height: 'auto',
      width: 'auto',
    });
  }

  }
   
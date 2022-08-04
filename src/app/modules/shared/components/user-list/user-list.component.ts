import { Component, OnInit , ViewChild ,AfterViewInit ,inject} from '@angular/core';
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

  displayedColumns: string[] = ['image', 'title', 'description', 'target-date','status','action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

 

  constructor(
    private dialog:MatDialog,
    private userTasksService : UsertasksService,
    private matSnackBar: MatSnackBar,
  
  )
  {}   
    
  
  baseImgUrl = environment.imageUrl;

  ngOnInit(): void {
    this.todoListing(1, 10,'');
  }
  ngAfterViewInit() { }

    addTask() {
     const dialogRef =  this.dialog.open(DialogComponent, {
       width:'auto',
       height : 'auto'
      });

      dialogRef.afterClosed().subscribe((res:any) => {
        this.todoListing(1,10, '')
      })
  }
  
  todoListing(page: number, limit: number, search:string){
    console.log('hello');
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
      this.todoListing(1, 10, '');
    }  
   
  
  viewTodo(row:any ,id:any){
    row.type='View Current Tasks'    
    this.dialog.open(Dialog2Component,{
      data:row 
   })
  }

  editTodo(row:any){
    row.type='Edit Tasks'
    this.dialog.open(DialogComponent,{
    height: 'auto',
      width: 'auto',
      data:row
  })
  }

  searchtitle(e:any){
    console.log(e.target.value,'value...');
    this.searchValue = e.target.value;
    this.todoListing(1, 10, this.searchValue)
  }

  deleteTasks(id:any){   
    if(id){    
      const dialogRef = this.dialog.open(Dialog3Component,{
        height: 'auto',
        width: 'auto',
        data:id
      })


      dialogRef.afterClosed().subscribe((res:any) => {
        this.todoListing(1, 10,'');
      })
    }
  }
  }
   
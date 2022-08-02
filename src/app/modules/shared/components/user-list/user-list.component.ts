import { Component, OnInit , ViewChild ,AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UsertasksService } from 'src/app/services/usertasks.service';
import { environment } from 'src/environments/environment.prod';

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


  displayedColumns: string[] = ['image', 'title', 'description', 'target-date','status','action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

 

  constructor(
    private dialog:MatDialog,
    private userTasksService : UsertasksService
   ) 
  {}     
  
  baseImgUrl = environment.imageUrl;

  ngOnInit(): void {
    this.todoListing(1, 10);
  }
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
  
  todoListing(page: number, limit: number){
    console.log('hello');
    this.userTasksService.todoListing(page, limit).subscribe(
      (res: any) => {
        console.log(res, 'data');
        this.todoData = res?.data?.docs;
        console.log(this.todoData, 'hellooo.....');
        this.previousPage = res?.data?.prevPage;
        this.count = res?.data?.totalDocs;
        this.currentPage = res?.data?.page;
      },
      (err) => {
        console.log(err);
      }
      );

    }

    getPage(event: any) {
      console.log('event', event);
      this.p = event;
      this.todoListing(this.p, 10);
    }
  


  applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

  editTasks(row:any){
    this.dialog.open(DialogComponent,{
    height: 'auto',
      width: 'auto',
      data:row
  })
  }
}
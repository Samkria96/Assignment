import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './httpshared.service';



@Injectable({
  providedIn: 'root'
})
export class UsertasksService {

  constructor(
    private http: HttpClient,
    private httpService: HttpService
  ) { }

  createTodo(data:any){
    return this.httpService.post('admin/todo/create-todo',data)
  }

  todoListing(page: any, limit: any, search:any){
    return this.httpService.get(`admin/todo/?page=${page}&limit=${limit}&search_text
    =${search}`)
  }

  editTodo(data :any ,_id:any){
    return this.httpService.put(`admin/todo/${_id}`,data)
  }

  viewTodo(_id:any , data :any ){
    return this.httpService.get(`admin/todo/${_id}`,data)
  }   

  deleteTodo(_id:any){
    return this.httpService.delete(`admin/todo/${_id}`)
  }
}

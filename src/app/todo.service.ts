import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../models";
import {Observable} from "rxjs";

const baseurl = "https://jsonplaceholder.typicode.com/";
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private readonly http: HttpClient) { }

  public getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(baseurl + "todos");
  }
}

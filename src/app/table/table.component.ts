import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";
import {Todo} from "../../models";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  todos: Todo[];
  displayedColumns = ["userId", "id", "title", "completed"];

  constructor(private readonly todoservice: TodoService) {

    this.todos = [];

    todoservice.getTodos().subscribe(value => {
      this.todos = value;
    });
  }

  ngOnInit(): void {
  }

}

import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnInit {

  todos = [];
  finishedTodos = [];
  todo : string;


  constructor(
    private http:HttpClient
  ) { }

  ngOnInit()
  {

  }

  getTodos()
  {
    return this.todos;
  }

  getFinishedTodos()
  {
    return this.finishedTodos;
  }


  addTodo(todo)
  {
    let modifiedTodo = {
      "todo" : todo,
      "done" : false
    }
    this.todos.push(modifiedTodo);
  }

  addFinishedTodo(todo)
  {
    this.finishedTodos.push(todo);
    console.log(this.finishedTodos);
  }


  deleteTodo(todo)
  {
    let id = todo.id;
    let newTodos = this.todos.filter(todo => todo.id !== id);
    this.todos = newTodos;
    console.log(this.todos);

  }

  deleteFinishedTodos()
  {
    this.finishedTodos = [];
  }

  updateTodo(todo)
  {

  }

}

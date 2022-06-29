import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ITodoItem } from '../../types/todo-item';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.css']
})
export class TodoListPageComponent implements OnInit {

  todoItems: ITodoItem[] = [];
  constructor(private todoService: TodoService) { }

  getTodoItems(): void {
    this.todoService.getTodoItems().subscribe((todoItems) => this.todoItems = todoItems);
  }

  ngOnInit(): void {
    this.getTodoItems();
  }

}

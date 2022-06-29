import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ITodoItem } from '../../types/todo-item';

@Component({
  selector: 'app-todo-item-form',
  templateUrl: './todo-item-form.component.html',
  styleUrls: ['./todo-item-form.component.css']
})
export class TodoItemFormComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  public todoName = '';
  public todoItems: ITodoItem[] = [];


  public addTodoItem = () => {
    this.todoItems.push({
      id: this.todoItems.length,
      name: this.todoName,
      completed: false
    });


    this.todoService.updateTodoList(this.todoItems);
    this.todoName = '';
  };

  public getTodoItems = () => {
    this.todoService.getTodoItems().subscribe((todoItems) => {
      this.todoItems = todoItems
    });
  }


  public ngOnInit = () => {
    this.getTodoItems();
  }

}

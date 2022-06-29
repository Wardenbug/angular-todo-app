import { Component, OnInit, Input } from '@angular/core';
import { ITodoItem } from '../../types/todo-item';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  public isEdit = false;
  public todoItems: ITodoItem[] = [];
  @Input() public todoItem!: ITodoItem


  public getTodoItems = () => {
    this.todoService.getTodoItems().subscribe((todoItems) => this.todoItems = todoItems);
  }

  public ngOnInit = () => {
    this.getTodoItems();
  }


  public toggleEdit = () => {
    this.isEdit = !this.isEdit;
  }

  public handleEdit = () => {
    this.todoItems = this.todoItems.map((todoItem) => {
      if (this.todoItem.id === todoItem.id) {
        return {
          ...this.todoItem
        }
      }
      return todoItem;
    });

    this.todoService.updateTodoList(this.todoItems);
    this.toggleEdit();

  }

  public handleCheck = (completed: boolean) => {
    this.todoItems = this.todoItems.map((todoItem) => {
      if (this.todoItem.id === todoItem.id) {
        return {
          ...this.todoItem,
          completed
        }
      }
      return todoItem;
    })

    this.todoService.updateTodoList(this.todoItems);
  }

  public handleDelete = () => {
    this.todoItems = this.todoItems.filter((todoItem) => todoItem.id !== this.todoItem.id)
    this.todoService.updateTodoList(this.todoItems);
  }
}

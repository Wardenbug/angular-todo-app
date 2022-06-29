import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITodoItem } from '../types/todo-item';
import { CryptService } from './crypt.service';
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

const TODO_LIST_KEY = 'todoList';
const INITIAL_TODO_LIST = [
  { id: 1, name: 'Learn Angular', completed: false, },
  { id: 2, name: 'Learn React', completed: true, },
  { id: 3, name: 'Learn Vue', completed: true, }
]

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todoList = new BehaviorSubject<ITodoItem[]>([]);

  constructor(private cryptService: CryptService) {
    const todoList = localStorage.getItem(TODO_LIST_KEY);
    if (todoList) {
      const todoListItems = JSON.parse(todoList) as ITodoItem[];
      this.todoList = new BehaviorSubject<ITodoItem[]>(todoListItems.map((element) => {
        return {
          ...element,
          name: this.cryptService.decrypt(element.name)
        }
      }));
    } else {
      this.todoList = new BehaviorSubject<ITodoItem[]>(INITIAL_TODO_LIST);
    }
  }

  public updateTodoList = (todoList: ITodoItem[]) => {
    this.todoList.next(todoList);
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList.map((element) => {
      return {
        ...element,
        name: this.cryptService.encrypt(element.name)
      }
    })))
  }

  public getTodoItems = (): Observable<ITodoItem[]> => {
    return this.todoList;
  }
}

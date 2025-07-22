import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private localStorageKey = 'todo_list_angular';

  getTodos(): string[] {
    const todos = localStorage.getItem(this.localStorageKey) as string;
    return todos ? JSON.parse(todos) : [];
  }

  addTodo(todo: string) {
    const todos = this.getTodos();
    todos.push(todo);
    localStorage.setItem(this.localStorageKey, JSON.stringify(todos));
  }

  deleteTodo(index: number) {
    const todos = this.getTodos();
    todos.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(todos));
  }
}

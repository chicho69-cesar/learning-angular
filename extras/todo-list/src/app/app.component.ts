import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  todoList: string[] = [];
  newTodo: string = '';

  private _todoService = inject(TodoService);

  ngOnInit(): void {
    this.todoList = this._todoService.getTodos();
  }

  addTodo() {
    this._todoService.addTodo(this.newTodo);
    this.newTodo = '';
    this.todoList = this._todoService.getTodos();
  }

  deleteTodo(index: number) {
    this._todoService.deleteTodo(index);
    this.todoList = this._todoService.getTodos();
  }
}

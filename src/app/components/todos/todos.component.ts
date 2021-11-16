import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] | undefined;

  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = []
  }

  toggleDone(id: number) {
    this.todos?.map((v, i) => {
      if (id == i) v.completed = !v.completed;
      return v;
    })
  }

  addTodo() {
    this.todos?.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }
}

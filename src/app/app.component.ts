import { Component } from '@angular/core';

class Todo {
  constructor(public name: string,
              public surname: string,
              public patronumic: string,
              public level: string,
              public born: any,
              public adress: string,
              public phone: string,
              public email: string,
              public money: number){}
}

const todos: Todo[] = [
  {
    name: "Иван",
    surname: "Иванов",
    patronumic: "Иванович",
    level: "Должность",
    born: "12.12.2012" ,
    adress: "Адресс",
    phone: "321654987",
    email: "Simple@duck.krya",
    money: 2
  },
  {
    name: "adfsdf",
    surname: "adfsdf",
    patronumic: "adfsdf",
    level: "adfsdf",
    born: "12.12.2012" ,
    adress: "adfsdf",
    phone: "adfsdf",
    email: "adfsdf",
    money: 1
  }
]

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  todos: Todo[] = todos;
  newTodoSurname: string;
  newTodoName: string;
  newTodoPatronumic: string;
  newTodoLevel: string;
  newTodoBorn: any;
  newTodoAdress: string;
  newTodoPhone: string;
  newTodoEmail: string;
  newTodoMoney: number;

  showModalWindov: boolean = false;
  showEditSubmit: boolean = false;

  edit: boolean = false;
  todo: Todo;

  delete(){
    let index = this.todos.indexOf(this.todo);

    if(index > -1){
      this.todos.splice(index, 1);
    }
    this.showModalWindov = !this.showModalWindov;
  }

  create(){
    if(this.edit == true){
      

      this.todo.name = this.newTodoName;
      this.todo.surname = this.newTodoSurname;
      this.todo.patronumic = this.newTodoPatronumic;
      this.todo.level = this.newTodoLevel;
      this.todo.born = this.newTodoBorn;
      this.todo.adress = this.newTodoAdress;
      this.todo.phone = this.newTodoPhone;
      this.todo.email = this.newTodoEmail;
      this.todo.money = this.newTodoMoney;

      this.edit = false;
    } else{
      let todo: Todo = new Todo(this.newTodoName,
                                this.newTodoSurname,
                                this.newTodoPatronumic,
                                this.newTodoLevel,
                                this.newTodoBorn,
                                this.newTodoAdress,
                                this.newTodoPhone,
                                this.newTodoEmail,
                                this.newTodoMoney
      );
      this.todos.push(todo);
    }
    this.newTodoName = undefined;
    this.newTodoSurname = undefined;
    this.newTodoPatronumic = undefined;
    this.newTodoLevel = undefined;
    this.newTodoBorn = undefined;
    this.newTodoAdress = undefined;
    this.newTodoPhone = undefined;
    this.newTodoEmail = undefined;
    this.newTodoMoney = undefined;
    this.showEditSubmit = false;
  }

  redact(todo: Todo){
    this.showEditSubmit = true;

    this.newTodoName = todo.name;
    this.newTodoSurname = todo.surname;
    this.newTodoPatronumic = todo.patronumic;
    this.newTodoLevel = todo.level;
    this.newTodoBorn = todo.born;
    this.newTodoAdress = todo.adress;
    this.newTodoPhone = todo.phone;
    this.newTodoEmail = todo.email;
    this.newTodoMoney = todo.money;
    
    this.edit = true;
    this.todo = todo;
  }

  showModalWin(todo: Todo){
    this.todo = todo;
    this.showModalWindov = !this.showModalWindov;
  }

  closeModalWin(){
    this.showModalWindov = !this.showModalWindov;
  }

  clearForm(){
    this.showEditSubmit = false;
    
    this.newTodoName = undefined;
    this.newTodoSurname = undefined;
    this.newTodoPatronumic = undefined;
    this.newTodoLevel = undefined;
    this.newTodoBorn = undefined;
    this.newTodoAdress = undefined;
    this.newTodoPhone = undefined;
    this.newTodoEmail = undefined;
    this.newTodoMoney = undefined;

  }
}

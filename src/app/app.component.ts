import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  tile = 'todolist';
  todoList = [
    {tile: 'install NodeJS'},
    {tile: 'install Angular CLI'},
    {tile: 'create new app'},
    {tile: 'serve app'},
    {tile: 'devalop app'},
    {tile: 'deploy app'},
  ];
  }
  // template:`
  //   <h1>Welcome to {{title}}</h1>

  //   <app-input-button-unit></app-input-button-unit>

  //   <ul>
  //     <li *ngFor="let todoItem of todoList">
  //         {{to do Item.title}}
  //     </li>
  //   </ul>
  // `,
// export class AppComponent {
//   title = 'my-app';
// }

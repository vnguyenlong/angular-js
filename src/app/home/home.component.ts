import { query, transition } from '@angular/animations';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations: [
  //    trigger('gloas', [
  //      transition('* => * ',) [
  //        query(':enter', style({opacity: 0 }), {optional: true})
  //      ]
  //    ])
  // ]
})
export class  HomeComponent implements OnInit {

  itemCount: number = 0;//nếu em ko để number = 0 thì sẽ báo lỗi em chưa hiểu sao nó thế 
  btnText: string = 'Add an item';
  goalText: string ='My first life goal';
  goals: any[] = [];// cả đây nếu em ko để dữ liệu ra là any thì nó cũng lỗi
  
  constructor() { }

  ngOnInit(): void {
    this.itemCount = this.goals.length;

  }
  addItem(){
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }
  removeItlem(i){// đoạn i này thì em chưa hiểu tại sao lỗi, nếu từ bên home.component
    this.goals.splice(i, 1);
  }
}

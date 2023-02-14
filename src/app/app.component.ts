import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Micheal Fallon S00211436'
  title = 'To Do List';
  thingsToDo= [
    'Learn javascript',
    'Learn Angular',
    'Learn Redux'
  ]
  thingsCompleted=[
    'Complete Week 2 Work'
  ];

  TaskSummary():string {
      return `${this.thingsToDo.length} to do / ${this.thingsCompleted.length} completed`
  }
  
  constructor() {
    setInterval(() => {
      this.thingsToDo.push('make coffee');
    },5000)
  
  }
}

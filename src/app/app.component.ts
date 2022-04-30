import { Component } from '@angular/core';
import * as studentsData  from '../assets/json/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment-1';

  students: any = (studentsData as any).default;

  constructor(){}
  ngOnInit(){
    console.log(studentsData);
  }
}

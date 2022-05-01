import { Component, Input, OnInit } from '@angular/core';
import { STUDENTS } from '../services.component'
import * as studentsData  from '../../../assets/json/data.json';

@Component({
  selector: 'app-student-td',
  templateUrl: './student-td.component.html',
  styleUrls: ['./student-td.component.scss']
})
export class StudentTdComponent implements OnInit {
  Students: STUDENTS[] = studentsData;
  studentArray = (Object.values(this.Students));



  constructor() { }

  ngOnInit(): void {
    this.studentArray.splice(-2, 2);
    console.log(this.Students);
  }

  alertStudent(i:any) {
    alert(i)
  }

  onRemove(student: any) {
    let index = this.studentArray.indexOf(student);
    this.studentArray.splice(index, 1);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { STUDENTS } from '../services.component'
import * as studentsData  from '../../../assets/json/data.json';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-student-td',
  templateUrl: './student-td.component.html',
  styleUrls: ['./student-td.component.scss']
})
export class StudentTdComponent implements OnInit {
  Students: STUDENTS[] = studentsData;
  studentArray = (Object.values(this.Students));
  searchTerm = "";



  constructor() { }

  ngOnInit(): void {
    this.studentArray.splice(-2, 2);

    this.studentArray.forEach(element => {
      if (element.gender === 0) {
        element.genderStr = "Female";
      } else if(element.gender === 1) {
        element.genderStr = "Male";
      } else if(element.gender === 2) {
        element.genderStr = "Transgender";
      } else {
        element.genderStr = "Not Known";
      }
    });
    console.log(this.Students);
  }

  alertStudent(i:any) {
    alert(i)
  }

  onRemove(student: any) {
    let index = this.studentArray.indexOf(student);
    this.studentArray.splice(index, 1);
  }
  onView(student: any) {
    let index = this.studentArray.indexOf(student);
    alert(this.studentArray[index].id + " " + this.studentArray[index].name + " " + this.studentArray[index].email + " ");
  }

}

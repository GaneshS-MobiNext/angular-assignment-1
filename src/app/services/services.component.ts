import { Component, OnInit } from '@angular/core';
import * as studentsData  from '../../assets/json/data.json';

interface STUDENTS {
  id: number;
  name: string;
  email: string;
  gender: number;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  // students: any = (studentsData as any).default;

  Students: STUDENTS[] = studentsData;
  studentArray = Object.values(this.Students);
  
  constructor() { }
  
  ngOnInit(): void {
    this.studentArray.splice(-2, 2);
    console.log(this.Students);
  }

}

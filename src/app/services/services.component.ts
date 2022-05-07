import { Component, OnInit } from '@angular/core';


export interface STUDENTS {
  id: number;
  name: string;
  email: string;
  gender: number;
  genderStr?: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  // students: any = (studentsData as any).default;

  
  
  constructor() { }
  
  ngOnInit(): void {
    
  }

}

import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {
  curdate:any;

  constructor() { }

  ngOnInit(): void {
    let temp = 5;
    this.curdate = (new Date().getMonth() + 1) + '-' + new Date().getFullYear();

  }
  ngAfterViewInit() {
   // document.getElementById("year").innerHTML = new Date().getFullYear().toString();
  }

}

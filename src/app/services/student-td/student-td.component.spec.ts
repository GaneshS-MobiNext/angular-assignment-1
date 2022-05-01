import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTdComponent } from './student-td.component';

describe('StudentTdComponent', () => {
  let component: StudentTdComponent;
  let fixture: ComponentFixture<StudentTdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

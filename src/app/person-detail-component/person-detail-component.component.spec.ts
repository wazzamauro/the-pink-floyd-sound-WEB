import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailComponentComponent } from './person-detail-component.component';

describe('PersonDetailComponentComponent', () => {
  let component: PersonDetailComponentComponent;
  let fixture: ComponentFixture<PersonDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

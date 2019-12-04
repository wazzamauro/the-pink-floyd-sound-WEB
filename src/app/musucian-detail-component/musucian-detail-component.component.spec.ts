import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusucianDetailComponentComponent } from './musucian-detail-component.component';

describe('MusucianDetailComponentComponent', () => {
  let component: MusucianDetailComponentComponent;
  let fixture: ComponentFixture<MusucianDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusucianDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusucianDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

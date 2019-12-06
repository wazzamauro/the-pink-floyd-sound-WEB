import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianDetailComponentComponent } from './musician-detail-component.component';

describe('MusicianDetailComponentComponent', () => {
  let component: MusicianDetailComponentComponent;
  let fixture: ComponentFixture<MusicianDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

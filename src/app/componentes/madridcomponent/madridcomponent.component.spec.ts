import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadridcomponentComponent } from './madridcomponent.component';

describe('MadridcomponentComponent', () => {
  let component: MadridcomponentComponent;
  let fixture: ComponentFixture<MadridcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadridcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadridcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

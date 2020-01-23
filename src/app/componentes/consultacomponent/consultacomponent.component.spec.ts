import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultacomponentComponent } from './consultacomponent.component';

describe('ConsultacomponentComponent', () => {
  let component: ConsultacomponentComponent;
  let fixture: ComponentFixture<ConsultacomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultacomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultacomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

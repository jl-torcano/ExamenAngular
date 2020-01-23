import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToledocomponentComponent } from './toledocomponent.component';

describe('ToledocomponentComponent', () => {
  let component: ToledocomponentComponent;
  let fixture: ComponentFixture<ToledocomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToledocomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToledocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

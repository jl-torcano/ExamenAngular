import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadocomponentComponent } from './listadocomponent.component';

describe('ListadocomponentComponent', () => {
  let component: ListadocomponentComponent;
  let fixture: ComponentFixture<ListadocomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadocomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

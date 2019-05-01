import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractControlsComponent } from './abstract-controls.component';

describe('AbstractControlsComponent', () => {
  let component: AbstractControlsComponent;
  let fixture: ComponentFixture<AbstractControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

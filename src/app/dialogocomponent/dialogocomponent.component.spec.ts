import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogocomponentComponent } from './dialogocomponent.component';

describe('DialogocomponentComponent', () => {
  let component: DialogocomponentComponent;
  let fixture: ComponentFixture<DialogocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogocomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

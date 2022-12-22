import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoclearComponent } from './contactoclear.component';

describe('ContactoclearComponent', () => {
  let component: ContactoclearComponent;
  let fixture: ComponentFixture<ContactoclearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoclearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoclearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example03EventBindingComponent } from './example03-event-binding.component';

describe('Example03EventBindingComponent', () => {
  let component: Example03EventBindingComponent;
  let fixture: ComponentFixture<Example03EventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Example03EventBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example03EventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

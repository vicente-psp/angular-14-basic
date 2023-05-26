import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example04TwoWayDataBindingComponent } from './example04-two-way-data-binding.component';

describe('Example04TwoWayDataBindingComponent', () => {
  let component: Example04TwoWayDataBindingComponent;
  let fixture: ComponentFixture<Example04TwoWayDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Example04TwoWayDataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example04TwoWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

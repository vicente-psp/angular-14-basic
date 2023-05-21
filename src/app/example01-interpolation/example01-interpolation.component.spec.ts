import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example01InterpolationComponent } from './example01-interpolation.component';

describe('Example01InterpolationComponent', () => {
  let component: Example01InterpolationComponent;
  let fixture: ComponentFixture<Example01InterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Example01InterpolationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example01InterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

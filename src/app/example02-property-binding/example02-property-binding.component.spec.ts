import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example02PropertyBindingComponent } from './example02-property-binding.component';

describe('Example02PropertyBindingComponent', () => {
  let component: Example02PropertyBindingComponent;
  let fixture: ComponentFixture<Example02PropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Example02PropertyBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example02PropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

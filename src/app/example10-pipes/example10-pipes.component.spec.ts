import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example10PipesComponent } from './example10-pipes.component';

describe('Example10PipesComponent', () => {
  let component: Example10PipesComponent;
  let fixture: ComponentFixture<Example10PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Example10PipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example10PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

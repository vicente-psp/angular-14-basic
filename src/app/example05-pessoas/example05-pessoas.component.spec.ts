import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example05PessoasComponent } from './example05-pessoas.component';

describe('Example05PessoasComponent', () => {
  let component: Example05PessoasComponent;
  let fixture: ComponentFixture<Example05PessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Example05PessoasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example05PessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

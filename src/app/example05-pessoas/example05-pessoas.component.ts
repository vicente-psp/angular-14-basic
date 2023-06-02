import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example05-pessoas',
  templateUrl: './example05-pessoas.component.html',
  styleUrls: ['./example05-pessoas.component.sass']
})
export class Example05PessoasComponent {

  titulo = 'Cadastro de pessoas';
  formGroupPessoa = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(2)]),
    dataNascimento: new FormControl('', Validators.required),
    telefone: new FormControl('', [Validators.required, Validators.pattern(/^[(]\d{2}[)]\d{4,5}[-]\d{4}/gi)]),
    rua: new FormControl(''),
    numero: new FormControl<number | null>(null),
    bairro: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  salvar(): void {
    if (this.formGroupPessoa.valid) {
      console.log('salvar pessoa => ', this.formGroupPessoa.value);
    }
  }

  limpar(): void {
    this.formGroupPessoa.reset();
  }

}

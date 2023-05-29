import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface Pessoa {
  nome: string;
  dataNascimento: string;
  telefone: string;
  rua?: string;
  numero?: string;
  bairro?: string;
  email: string;
}

const factoryPessoa = (): Pessoa => {
  return {
    nome: '',
    dataNascimento: '',
    telefone: '',
    email: ''
  }
}

@Component({
  selector: 'app-example05-pessoas',
  templateUrl: './example05-pessoas.component.html',
  styleUrls: ['./example05-pessoas.component.sass']
})
export class Example05PessoasComponent {

  mensagem = 'formulário inválido';
  titulo = 'Cadastro de pessoas';
  pessoa: Pessoa = factoryPessoa();
  controlTelefone = new FormControl('', [Validators.required, Validators.pattern(/^[(]\d{2}[)]\d{4,5}[-]\d{4}/gi)]);

  salvar(): void {
    console.log('pessoa => ', this.pessoa);
    if (this.isValidPessoa()) {
      console.log('salvar pessoa');
    }
  }

  limpar(): void {
    console.log('controlTelefone.value => ', this.controlTelefone.value);
    console.log('controlTelefone.valid => ', this.controlTelefone.valid);
    this.pessoa = factoryPessoa();
  }

  isValidPessoa(): boolean {
    if (!this.isValidNome() || !this.pessoa.dataNascimento
      || !this.isValidTelefone() || !this.isValidEmail()) {
      this.mensagem = 'formulário inválido';
      return false;
    }
    this.mensagem = 'formulário válido';
    return true;
  }

  isValidNome(): boolean {
    return !(!this.pessoa.nome || this.pessoa.nome.trim().length < 2 || this.pessoa.nome.trim().length > 15);
  }

  isValidTelefone(): boolean {
    const regex = /^[(]\d{2}[)]\d{4,5}[-]\d{4}/gi
    return !(!this.pessoa.telefone || !regex.test(this.pessoa.telefone));
  }

  isValidEmail(): boolean {
    return !(!this.pessoa.email || this.pessoa.email.trim().length < 6);
  }
}

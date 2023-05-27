import { Component } from '@angular/core';

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

  salvar(): void {
    console.log('pessoa => ', this.pessoa);
    if (this.isValidPessoa()) {
      console.log('salvar pessoa');
    }
  }

  limpar(): void {
    this.pessoa = factoryPessoa();
  }

  isValidPessoa(): boolean {
    if (!this.pessoa.nome || !this.pessoa.dataNascimento
      || !this.pessoa.telefone || !this.pessoa.email) {
      this.mensagem = 'formulário inválido';
      return false;
    }
    this.mensagem = 'formulário válido';
    return true;
  }
}

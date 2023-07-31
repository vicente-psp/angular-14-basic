import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Example08ModulesService {

  contador = 1;

  constructor() {
    console.log('Example08ModulesService - constructor');
  }

}

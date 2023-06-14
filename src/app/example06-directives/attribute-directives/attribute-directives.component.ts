import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.sass']
})
export class AttributeDirectivesComponent implements OnInit {

  styles = {
    'color': 'white',
    'background-color': 'red',
    'font-size': '25px'
  };

  stylesInClass = 'teste2'
  stylesInClass2 = {'teste': false}
  stylesInClass3 = {'teste': true}

  constructor() { }

  ngOnInit(): void {
  }

  stylesMethod(): any {
    return {
      'color': 'white',
      'background-color': 'red',
      'font-size': '25px'
    }
  }

}

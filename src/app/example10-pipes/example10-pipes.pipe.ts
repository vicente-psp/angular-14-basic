import { Pipe, PipeTransform } from '@angular/core';

import { Element } from './example10-pipes.component';

@Pipe({
  name: 'example10Pipes'
})
export class Example10PipesPipe implements PipeTransform {

  transform(value: Element): string {
    console.log('position => ', value.position, ' - name => ', value.name);
    return value.name.toLowerCase();
  }

}

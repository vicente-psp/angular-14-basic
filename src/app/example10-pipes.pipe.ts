import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'example10Pipes'
})
export class Example10PipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

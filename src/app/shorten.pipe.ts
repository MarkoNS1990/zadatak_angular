import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, ): unknown {
    return value!==undefined?value.slice(0,6):null;
  }

}

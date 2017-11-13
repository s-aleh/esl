import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'implode'
})
export class ImplodePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let str: string = '';
    switch (typeof value) {
      case 'string':
        str = value;
        break;
      case 'object':
        value.forEach((items: any, index: number) => {
          str = str + items[index];
          if (index < value.length - 1) {
            str = str + ', ';
          }
        });
        break;
    }
    return str;
  }

}

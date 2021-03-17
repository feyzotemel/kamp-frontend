import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {
  // value: pipe uygulanan değer, rate: pipe in değişkeninde gelen numara,
  //rn:{{ product.unitPrice |vatAdded:10 }}

  transform(value: number, rate: number): number {
    return value+ (value*rate/100);
  }

}

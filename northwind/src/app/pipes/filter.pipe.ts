import { Pipe, PipeTransform } from '@angular/core';
import { ProductComponent } from '../compenents/product/product.component';
import { Product } from '../models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
filterText = filterText?filterText.toLocaleUpperCase():""

    return filterText? value.filter((p:Product) => p.productName.toLocaleUpperCase().indexOf(filterText)!==-1):value;
  }

}

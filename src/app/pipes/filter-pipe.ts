import { Pipe, PipeTransform } from '@angular/core';
import { Farmer } from '../entities/Farmer';

@Pipe({
  name: 'filter',
  standalone: false,
})
export class FilterPipe implements PipeTransform {

  transform(value: Farmer[], searchTerm: string) {

    if (value.length === 0 || searchTerm === '') {
      return value;
    }

    return value.filter(farmer =>
      farmer.username?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));

  }

}

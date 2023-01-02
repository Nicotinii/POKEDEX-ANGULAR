// filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param list list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(list: Pokemon[], searchText: string): Pokemon[] {
    searchText = searchText.toLocaleLowerCase();
    
    if (!searchText) return list;

    return list.filter((pokemon: Pokemon) => {
      return pokemon.name.toLocaleLowerCase().includes(searchText);
    });
  }
}
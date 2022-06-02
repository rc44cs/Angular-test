import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterData: string): any[] {
    if (!items) return [];
    if (!filterData) return items;
    console.log(filterData);
    filterData = filterData.toString().toLowerCase();
    return items.filter((it) => {
      return it.login.toLowerCase().includes(filterData);
    });
  }
}

import { Pipe, PipeTransform } from "@angular/core";
import { isNgTemplate } from "@angular/compiler";

@Pipe({
  name: "beerFilter"
})
export class BeerFilterPipe implements PipeTransform {
  transform(beers: any[], filterValue: number): any {
    if (!beers || !filterValue) {
      return beers;
    }

    if (filterValue == 1) {
      return beers;
    } else if (filterValue == 2) {
      return beers.filter(beer => beer.abv >= 7);
    } else if (filterValue == 3) {
      return beers.filter(beer => beer.abv < 7);
    } else if (filterValue == 4) {
      return beers.filter(beer => beer.ibu >= 40);
    } else if (filterValue == 5) {
      return beers.filter(beer => beer.ibu < 40);
    }
  }
}

import { Component } from "@angular/core";
import { punkApiService } from "./services/punkapi.service";

import { Beers } from "./services/classes/beers";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  listBeers: Beers[];
  filterValue: number;

  constructor(private _punkApiService: punkApiService) {}

  ngOnInit() {
    this._punkApiService.getBeers().subscribe(data => {
      this.listBeers = data;
    });
  }

  // filterBeers(index) {
  //   switch (index) {
  //     case 1:
  //       break;
  //     case 2:
  //       this.listBeers = this.listBeers.filter(beer => beer.abv > 5);
  //       console.log("Fired");
  //       break;
  //     case 3:
  //       this.listBeers = this.listBeers.filter(beer => beer.ibu < 30);
  //       console.log("Fired");
  //       break;
  //   }
  // }
}

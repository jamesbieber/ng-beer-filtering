import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class punkApiService {
  constructor(private httpclient: HttpClient) {}

  getBeers(): Observable<any> {
    return this.httpclient.get("https://api.punkapi.com/v2/beers");
  }
}

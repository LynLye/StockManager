import { Injectable } from '@angular/core';

import { Stock } from './stock';
// import { MOCKSTOCKS} from './mock-stocks';
// TODO: server data get and post (according to the hero example)
@Injectable({
  providedIn: 'root'
})
export class StocksService {
  stocks: Stock[] = [];

  constructor() { }
  getStocks(): Stock[] {
    /** this the data from a class
     * return MOCKSTOCKS; */
    return this.stocks;
  }
}

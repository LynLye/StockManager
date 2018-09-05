import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { Stock } from '../stock';
import { StocksService } from '../stocks.service';
import { OHLC, SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  result: OHLC;
  stocks: Stock[];
  pushStock: Stock = new Stock;

  constructor(private stocksService: StocksService,
  private searchService: SearchService) { }

  ngOnInit() {
  }

  getResult(stock: string) {
    this.pushStock = { cmp: stock };
    this.stocksService.getStocks().push(this.pushStock);
    this.stocks = this.stocksService.getStocks();
    this.searchService.getOHLC(stock).subscribe((data: OHLC) => this.result = {...data});
  }
}

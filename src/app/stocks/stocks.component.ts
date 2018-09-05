import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Stock } from '../stock';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocks: Stock[];

  constructor(private stocksService: StocksService) { }

  ngOnInit() {
    this.getStocks();
  }

  getStocks(): void {
    this.stocks = this.stocksService.getStocks();
  }

}

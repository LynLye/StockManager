import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OHLC {
  open: {
    price: number,
    time: number
  };
  close: {
    price: number;
    time: number
  };
  high: number;
  low: number;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // cmp = 'aapl';
  searchtype = 'ohlc';
  apiUrl = 'https://api.iextrading.com/1.0/stock/';
  constructor(private http: HttpClient) { }
  getOHLC(stock: string) {
      return this.http.get<OHLC>(this.apiUrl + stock + '/' + this.searchtype);
  }
  // TODO: connection test and error handler
  /**
   * getApiResponse(): OHLC {
    return this.http.get(this.apiUrl, { observe: 'response' });
  }
  **/
}

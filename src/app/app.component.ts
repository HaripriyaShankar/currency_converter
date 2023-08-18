import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularapp';
  fromCurrency: number = 0;
  toCurrency: number = 0;
  amount: number = 0;
  resValue: any;
  usd = { id: 'USD', value: 1.126735 };

  gbp = { id: 'GBP', value: 0.876893 };

  inr = { id: 'INR', value: 79.677056 };
  onSubmit(val: any) {
    this.fromCurrency = val.fromCurrency;
    this.toCurrency = val.toCurrency;
    this.amount = val.amount;
  }
}

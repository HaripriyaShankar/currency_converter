import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currpipe',
})
export class CurrpipePipe implements PipeTransform {
  usd = { id: 'USD', value: 1.126735 };

  gbp = { id: 'GBP', value: 0.876893 };

  inr = { id: 'INR', value: 79.677056 };
  transform(from: number, to: number, amt: number): string {
    let val = Number(amt);

    if (from == to) {
      var num = Number(val).toFixed(2);
      num = num.replace(/,/g, '');
      return num;
    }
    if (from == this.usd.value && to == this.inr.value) {
      var number = Math.round((val / this.usd.value) * this.inr.value);
      var str = Number(number).toFixed(2);
      return str.replace(/,/g, '');
    }
    if (from == this.gbp.value && to == this.inr.value) {
      var number = Math.round((val / this.gbp.value) * this.inr.value);
      console.log(number);
      var str = Number(number).toFixed(2);
      console.log(str);
      console.log(str.replace(/,/g, ''));
      return str.replace(/,/g, '');
    }
    if (from == this.inr.value && to == this.usd.value) {
      var number = Math.round((val / this.inr.value) * this.usd.value);
      var str = Number(number).toFixed(2);
      return str.replace(',', '');
    }
    if (from == this.gbp.value && to == this.usd.value) {
      var number = Math.round((val / this.gbp.value) * this.usd.value);
      var str = Number(number).toFixed(2);
      return str.replace(/,/g, '');
    }
    if (from == this.usd.value && to == this.gbp.value) {
      var number = Math.round((val / this.usd.value) * this.gbp.value);
      var str = Number(number).toFixed(2);
      return str.replace(/,/g, '');
    }
    if (from == this.inr.value && to == this.gbp.value) {
      var number = Math.round((val / this.inr.value) * this.gbp.value);
      var str = Number(number).toFixed(2);
      return str.replace(/,/g, '');
    }
    return '';
  }
}

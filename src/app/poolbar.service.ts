//import 'rxjs/Rx';
//import 'rxjs/add/operator/toPromise';
    import { Injectable } from '@angular/core';
    import { Http } from '@angular/http';
    import { Quote } from './quote.model';

    @Injectable()
    export class PoolbarService {

      Xuote: Quote = {
      		line: '',
      		author: ''
      };

      constructor(private http: Http) { }

      getValue() {
      	return " Szevasz Angular! "
      };

      getQuoteOfTheDay(): Promise<any> {
    //  	return this.http.get('http://fodlaci.hu/Angular2/quote.json').toPromise()
      	return this.http.get('http://localhost:3200/poolparam').toPromise()
      		.then(response => response.json());

      }

      getSlider(): Promise<any> {
        return this.http.get('http://fodlaci.hu/Angular2/slides.json').toPromise()
    //    return this.http.get('/slides.json').toPromise()
          .then(response => console.log("Json caruesel: ",response.json()));

      }


    }



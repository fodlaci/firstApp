import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote.model';
import { PoolbarService } from '../poolbar.service';

@Component({
  selector: 'app-poolbar',
  templateUrl: './poolbar.component.html',
  styleUrls: ['./poolbar.component.css']
})
export class PoolbarComponent implements OnInit {

  title = 'Pályakiosztás';
//  quote: Quote;
  quote = [];
  mutat = {};



  constructor(private poolbarService: PoolbarService) { 
  		this.poolbarService.getQuoteOfTheDay()
  			.then(quote => {this.quote = quote; console.log("Ez lett:",this.quote[0]); this.mutat = this.quote[0]});

//  			this.mutat = this.quote[0];

  }


  ngOnInit() {
  		console.log(this.poolbarService.getValue());
  		this.title = this.poolbarService.getValue();

  }

}

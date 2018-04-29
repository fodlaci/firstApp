import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel'
import { Slide } from '../slide.model';
import { PoolbarService } from '../poolbar.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

//  public items: object[] = [];
  public items: object[] = [];
  
  public carouselConfig: NgxCarousel;
  
  constructor(private poolbarService: PoolbarService) {

/*        this.poolbarService.getSlider()
        .then(items => {this.items = items; console.log("Ez lett a sleder:",this.items[0])});
*/

    this.carouselConfig = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 10000,
      point: {
        visible: true
      },
      loop: true,
      touch: true
    }
  }
  

  ngOnInit() {

    this.items.push({title:"slide 1",color:"blue"});
    this.items.push({title:"slide 2",color:"red"});
    this.items.push({title:"slide 3",color:"orange"});


  }



}

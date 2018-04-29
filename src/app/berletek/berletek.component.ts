import { Component, OnInit } from '@angular/core';
import { MatToolbarModule} from '@angular/material';

@Component({
  selector: 'app-berletek',
  templateUrl: './berletek.component.html',
  styleUrls: ['./berletek.component.css']
})
export class BerletekComponent implements OnInit {

  fillerNav = Array(50).fill(0).map((_, i) => `Nav aaaaaa Item ${i + 1}`);

  constructor() { }

  ngOnInit() {
  }

}

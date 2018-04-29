import { Component, OnInit } from '@angular/core';
import { HeadbarService } from './headbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {

  belepve = "Belépés";
  icon = " ";

  constructor(private headbar: HeadbarService) { }

  ngOnInit() {
	  console.log(this.headbar.getValue(2));
      this.belepve = this.headbar.getValue(3);
      this.icon = "account_circle";


  };


}

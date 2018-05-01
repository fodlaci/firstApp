import { Component, OnInit } from '@angular/core';
import { HeadbarService } from './headbar.service';
import { Kijelol } from '../kijelol.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {

  Kijelol = {
  szoveg: "ali",
  user: "admin"
  };

  belepve = "Belépés";
  icon = " ";


  constructor(private headbar: HeadbarService) { }

  ngOnInit() {
//	  console.log(this.headbar.getValue(1));
    console.log("Kijelol értéke:", this.Kijelol.szoveg);
      this.belepve = this.headbar.getValue(1);
      this.icon = "account_circle";


  };

private lepeget () {
  let szov = this.headbar.getValue(1)
//  console.log("szöveg: ",this.headbar.getValue(1));
  return szov;
}



}

import { Component, OnInit } from '@angular/core';
import { MatToolbarModule} from '@angular/material';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  fillerNav = Array(50).fill(0).map((_, i) => `Nav aaaaaa Item ${i + 1}`);

  constructor() { }

  ngOnInit() {
  }

}

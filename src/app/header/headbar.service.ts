import { Injectable } from '@angular/core';

@Injectable()
export class HeadbarService {


  public belepett = "Belépés servizből";
  icon = " ";


  constructor() { }

  getValue(par)  {
  	let vissza = "üres";
  	if (par == 1) { vissza = "Beállítások"};
  	if (par == 2) { vissza = "Admin"};
  	if (par == 3) { vissza = "három"};
  	if (par == 4) { vissza = "négy"};
  	this.belepett = vissza
  	return this.belepett
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class HeadbarService {

  constructor() { }

  getValue(par)  {
  	let vissza = "üres";
  	if (par == 1) { vissza = "egy"};
  	if (par == 2) { vissza = "ketto és fél"};
  	if (par == 3) { vissza = "három"};
  	if (par == 4) { vissza = "négy"};
  	return vissza
  }

}

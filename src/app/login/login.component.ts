import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HeadbarService } from '../header/headbar.service';


import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;
  book: Observable<any>;
  books$: Observable<any>;
  authState: any = null;
  logButton = false;
  belepve = "Belépés";


  constructor(private authService: AngularFireAuth, private angularFireDatabase: AngularFireDatabase, private router: Router, private headbar: HeadbarService) {

/*   this.angularFireDatabase
      .object('/users/-gY6O2rqXHlgABd8adcdmvSe7yDg2')
      .valueChanges()
      .subscribe(data => {console.log('our book', data)});
*/
   this.authService.authState.subscribe((auth) => {
              this.authState = auth;
              console.log("this.authState: ",this.authState)
            });   


   }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService
    .auth
    .signInWithEmailAndPassword(form.value.email,form.value.password)
//    .signInWithEmailAndPassword('dev@fodlaci.hu','lilla91')
    .then(success => {
        this.logButton = !this.logButton;
        this.user = this.authState;
        console.log("sikeres belépés: ",this.user.uid);

        let path = `users/${this.user.uid}`;
        let data = {
                  email: this.authState.email,
                  displayName: "lacFod"
        }
        this.angularFireDatabase.object(path)
	    .valueChanges()
    	.subscribe(data => {console.log('login user: ', data),
                          console.log("path : ", path, "data: ",data),
                          this.belepve = this.headbar.getValue(2);
                          this.router.navigateByUrl('/home');
                        }
                );
//        .catch(error => console.log(error));


/*        console.log("userID: ",this.user.uid, " Email: ", this.user.email, this.logButton);
        console.log("User teljes: ", this.user);
*///        updateUserData();
      },
      err => console.log("Hiba: ",err)
    ) 

/*    console.log("form-value: ",form.value);
    console.log("email: ",form.value.email);
    console.log("jelszó: ",form.value.password);
*/  }

private kiirat (par1){

	console.log("email: ",this.user);
}

}


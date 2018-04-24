import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule} from '@angular/material';
import { MatIconModule} from '@angular/material';
import { MatListModule} from '@angular/material';
import { MatToolbarModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from './../environments/environment.prod';


import { PoolbarService } from './poolbar.service';
import { HeadbarService } from './header/headbar.service';

import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PoolbarComponent } from './poolbar/poolbar.component';
import { TicketComponent } from './ticket/ticket.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { SzolgaltatasComponent } from './szolgaltatas/szolgaltatas.component';
import {MatButtonModule} from '@angular/material/button';
import { ContaktComponent } from './contakt/contakt.component';
import { MatSidenavModule,MatCardModule,MatInputModule} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { BerletekComponent } from './berletek/berletek.component';
import { LoginComponent } from './login/login.component';
import { PagesListComponent } from './pages-list/pages-list.component';


const routerSettings: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'poolbar', component: PoolbarComponent },
  { path: 'service', component: SzolgaltatasComponent },
  { path: 'contakt', component: ContaktComponent },
  { path: 'season', component: BerletekComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PagenotfoundComponent,
    PoolbarComponent,
    TicketComponent,
    HomeComponent,
    CarouselComponent,
    SzolgaltatasComponent,
    ContaktComponent,
    BerletekComponent,
    LoginComponent,
    PagesListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatButtonModule,
    MatTableModule,
    CdkTableModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    NgxCarouselModule,
    MatCardModule,
    MatInputModule,
    NoopAnimationsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(routerSettings)
  ],
  providers: [PoolbarService, HeadbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

// firebasse
import{AngularFireModule} from '@angular/fire';
import {environment} from './environment'

//component
import { AppComponent } from './app.component';
import { RandomGachaComponent } from './random-gacha/random-gacha.component';
import { FirebaseService } from './firebase.service';
import { DisplayGachaComponent } from './display-gacha/display-gacha.component';
import { HomeComponent } from './home/home.component';
import { DisplayItemComponent } from './display-item/display-item.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
     RouterModule.forRoot([
      { path: "", component: RandomGachaComponent }]),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)],
  declarations: [ 
    AppComponent, 
    RandomGachaComponent, 
    DisplayGachaComponent, HomeComponent, DisplayItemComponent],
  bootstrap:    [ AppComponent ],
  providers: [FirebaseService]
})

export class AppModule { }

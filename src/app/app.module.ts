import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
<<<<<<< HEAD
import { NavbarComponent } from './components/navbar/navbar.component';
import { Login2Component } from './components/login2/login2.component';
=======
import { MainComponent } from './components/main/main.component';
>>>>>>> 2ae3a6a48f5b0030858d7957a72602bd577da7e6

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    NavbarComponent,
    Login2Component
=======
    MainComponent
>>>>>>> 2ae3a6a48f5b0030858d7957a72602bd577da7e6
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

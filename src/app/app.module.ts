import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { routing } from './routing';
import { CardComponent } from './components/card/card.component';
import { CardService } from './services/card.service';
import { AddCardComponent } from './components/add-card/add-card.component';
import { FormsModule } from '@angular/forms';
import { EditCardComponent } from './components/edit-card/edit-card.component';
import { Location } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import {UserService} from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardComponent,
    AddCardComponent,
    EditCardComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CardService,
    UserService,
    AuthGuard,
    Location
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

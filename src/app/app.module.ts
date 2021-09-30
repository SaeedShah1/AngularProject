import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EmployeeComponent} from './employee/employee.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatSliderModule} from "@angular/material/slider";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
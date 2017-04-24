import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import {HeaderComponent} from './basepage/app.header';
import {MainComponent} from './basepage/app.main';
import {FooterComponent} from './basepage/app.footer';
import {InputFieldComponent} from './InputFieldComponent/inputfield.component';

import {HeroDetailsComponent} from './HeroDetailsComponent/herodetails.component';
@NgModule({
  declarations: [
    AppComponent,HeaderComponent,MainComponent,FooterComponent,InputFieldComponent,HeroDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

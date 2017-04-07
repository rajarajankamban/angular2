import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import {HeaderComponent} from './basepage/app.header';
import {MainComponent} from './basepage/app.main';
import {FooterComponent} from './basepage/app.footer';
import {InputFieldComponent} from './InputFieldComponent/inputfield.component';
@NgModule({
  declarations: [
    AppComponent,HeaderComponent,MainComponent,FooterComponent,InputFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

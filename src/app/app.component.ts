import { Component } from '@angular/core';
import {HeaderComponent} from './basepage/app.header';
import {MainComponent} from './basepage/app.main';
import {FooterComponent} from './basepage/app.footer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  product = {name:'product 1'};
  changeName(event: any){
    console.log("Test :"+event.target.value)
    this.product.name = event.target.value;
  }
  

}

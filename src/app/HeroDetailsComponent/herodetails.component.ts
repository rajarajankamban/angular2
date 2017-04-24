import {Component} from '@angular/core';
import {Hero} from './hero';
@Component({
    selector:'hero-form',
    templateUrl:'herodetails.component.html'
})

export class HeroDetailsComponent{
    options : string[] = ['Tier 0','Tier 1','Tier 2','Tier 3','Tier 4'];
    model = new Hero(2,'rajan','Male',this.options[0],'asdf');
    /*To check the form values*/
    get diagnostic() { return JSON.stringify(this.model); }
}
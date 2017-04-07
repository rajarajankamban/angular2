import {Component} from "@angular/core";

@Component({
    templateUrl:'inputfield.component.html',
    selector: 'input-sample'
})

export class InputFieldComponent{
      title = 'app works!';
  product = {name:'product 1'};
  name : string = "";
  changeName(value: string){
    console.log("Test :"+value)
    this.name += value + "\n";
  }
  showItem : boolean = false;
  toggleValue(): void{
    this.showItem = !this.showItem;
  }
} 
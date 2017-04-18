import {Component} from "@angular/core";
import {userDetails} from "./userDetails";
@Component({
    templateUrl:'inputfield.component.html',
    selector: 'input-sample'
})

export class InputFieldComponent{
      title = 'app works!';
  product = {name:'product 1'};
  name : string = "";
  options : string[] = ['First Class','Second Class','Third Class'];
  user = {name:'',gender:'',option:''};

  changeName(value: string){
    console.log("Test :"+value)
    this.name += value + "\n";
  }
  showItem : boolean = false;
  toggleValue(): void{
    this.showItem = !this.showItem;
  }
//User details add component
  users : userDetails[] = [];
  addUserDetails(){
    this.users.push( new userDetails(this.user.name,this.user.gender,this.user.option));
  }
   // Here we are implementing the submitForm function. All we are doing for right now is spitting out the details of the form to our console.
  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }

} 
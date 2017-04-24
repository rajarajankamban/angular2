import { Component, OnInit } from "@angular/core";
import { userDetails } from "./userDetails";
@Component({
  templateUrl: 'inputfield.component.html',
  selector: 'input-sample'
})

export class InputFieldComponent implements OnInit {
  title: string = "abc";
  constructor() {
    console.log("Title :" + this.title);
    this.title = "123";
    console.log("Title :" + this.title);
  }
  //ngOnInit is a life cycle hook called by Angular2 to indicate that Angular is done creating the component.
  /*
  Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the constructor. 
  The constructor should only be used to initialize class members but shouldn't do actual "work".
  So you should use constructor() to setup Dependency Injection and not much else.
  ngOnInit() is better place to "start" - it's where/when components' bindings are resolved.
   */
  ngOnInit() { this.title = 'app works!'; console.log("Title :" + this.title); }
  product = { name: 'product 1' };
  name: string = "";
  options: string[] = ['First Class', 'Second Class', 'Third Class'];
  user = { name: '', gender: '', option: '' };

  changeName(value: string) {
    console.log("Test :" + value)
    this.name += value + "\n";
  }
  showItem: boolean = false;
  toggleValue(): void {
    this.showItem = !this.showItem;
  }
  //User details add component
  users: userDetails[] = [];
  addUserDetails() {
    this.users.push(new userDetails(this.user.name, this.user.gender, this.user.option));
  }
  // Here we are implementing the submitForm function. All we are doing for right now is spitting out the details of the form to our console.
  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
  }

} 
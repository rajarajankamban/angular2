import {Component} from "@angular/core";

@Component({
    templateUrl:'templateform.component.html',
    selector: 'templateform-sample'
})

export class TemplateFormComponent{
     
   // Here we are implementing the submitForm function. All we are doing for right now is spitting out the details of the form to our console.
  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }

} 
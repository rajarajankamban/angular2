import {Component} from "@angular/core";
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    templateUrl:'modelform.component.html',
    selector: 'modelform-sample'
})

export class ModelFormComponent{
     
   complexForm : FormGroup;

} 
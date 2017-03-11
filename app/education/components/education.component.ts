import {Component} from '@angular/core';

import {EducationService} from '../service/education.service';

@Component({
    templateUrl : "./app/education/html/education.html",
    providers:[EducationService]
})

export class EducationComponent{
    constructor(private _educationService:EducationService){
        
    }
    title = "Education";
    
}


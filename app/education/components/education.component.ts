import {Component, OnInit} from '@angular/core';

import {EducationService} from '../service/education.service';
import {Education} from '../service/education';

@Component({
    templateUrl : "./app/education/html/education.html",
    providers:[EducationService]
})

export class EducationComponent{
    constructor(private _educationService:EducationService){
        
    } 


    data:Education;
    getEducationDetails():void{
        this.data = this._educationService.getEducationDetails();
    }  
    ngOnInit(){
        this.getEducationDetails();
    }
}


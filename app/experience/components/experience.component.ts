import {Component} from '@angular/core';

import {ExperienceService} from '../service/experience.service';
import {Experience} from '../service/experience';

@Component({
    templateUrl : "./app/experience/html/experience.html",
    providers:[ExperienceService]
})

export class ExperienceComponent{
    constructor(private _experienceService:ExperienceService){
        
    }
    data:Experience;
    getExperienceDetails():void{
        this.data = this._experienceService.getExperience();
    }  
    ngOnInit(){
        this.getExperienceDetails();
    }
}


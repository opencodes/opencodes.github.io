import {Component} from '@angular/core';

import {ExperienceService} from '../service/experience.service';

@Component({
    templateUrl : "./app/experience/html/experience.html",
    providers:[ExperienceService]
})

export class ExperienceComponent{
    constructor(private _experienceService:ExperienceService){
        
    }
    title = "Experience";
   
}


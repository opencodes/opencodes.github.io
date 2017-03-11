import {Component} from '@angular/core';

import {SkillsService} from '../service/skills.service';

@Component({
    templateUrl : "./app/skills/html/skills.html",
    providers:[SkillsService]
})

export class SkillsComponent{
    constructor(private _skillsService:SkillsService){
        
    }
    title = "Skills";
   
}


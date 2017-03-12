import {Component, OnInit} from '@angular/core';

import {SkillsService} from '../service/skills.service';
import { RootObject } from '../service/skill';


interface Skills{
    category : string;
    stacks : Stack[];
}
interface Stack{
    title : string;
    experties : string;
}

@Component({
    templateUrl : "./app/skills/html/skills.html",
    providers:[SkillsService]
})






export class SkillsComponent{
    constructor(private _skillsService:SkillsService){
        
    }
    title = "Skills";

    data :RootObject;

    getSkills():void{
       this.data = this._skillsService.getSkill();
   }

   ngOnInit(){
    this.getSkills();
   }

   
}


import {Component, OnInit} from '@angular/core';

import {ResumeService} from '../service/resume.service';
import { Resume} from '../service/resume';

@Component({
    templateUrl : "./app/resume/html/resume.html",
    providers:[ResumeService]
})

export class ResumeComponent{
    constructor(private _resumeService:ResumeService){
        
    }
    data:Resume;

    getResume():void{
        this.data = this._resumeService.getResume();
    }

    ngOnInit(){
        this.getResume();
    }

   
}


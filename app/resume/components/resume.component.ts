import {Component} from '@angular/core';

import {ResumeService} from '../service/resume.service';

@Component({
    templateUrl : "./app/resume/html/resume.html",
    providers:[ResumeService]
})

export class ResumeComponent{
    constructor(private _resumeService:ResumeService){
        
    }
    title = "Resume";
   
}


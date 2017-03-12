import {Component, OnInit} from '@angular/core';

import {ProjectService} from '../service/project.service';
import {ProjectDetails} from '../service/project';

@Component({
    templateUrl : "./app/projects/html/project.html",
    providers:[ProjectService]
})

export class ProjectComponent{
    constructor(private _projectService:ProjectService){
        
    }
    data:ProjectDetails;
    getProjectDetails():void{
        this.data = this._projectService.getProject();
    }  
    ngOnInit(){
        this.getProjectDetails();
    }
  
}


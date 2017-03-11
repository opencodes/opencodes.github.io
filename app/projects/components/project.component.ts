import {Component} from '@angular/core';

import {ProjectService} from '../service/project.service';

@Component({
    templateUrl : "./app/projects/html/project.html",
    providers:[ProjectService]
})

export class ProjectComponent{
    constructor(private _projectService:ProjectService){
        
    }
    title = "Project";
  
}


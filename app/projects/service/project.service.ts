import { Injectable } from '@angular/core';

import {ProjectDetails} from './project';
import {PROJECT} from './project.moc.data';

@Injectable()
export class ProjectService{
    getProject(): ProjectDetails{
        return PROJECT;
    }
}
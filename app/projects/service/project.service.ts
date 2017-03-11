import { Injectable } from '@angular/core';

import {Project} from './project';
import {PROJECT} from './project.moc.data';

@Injectable()
export class ProjectService{
    getProject(): Project[]{
        return PROJECT;
    }
}
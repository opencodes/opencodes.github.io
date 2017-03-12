import { Injectable } from '@angular/core';
import { Experience} from './experience';
import { EXPERIENCE } from './experience.moc.data';

@Injectable()
export class ExperienceService{
    getExperience() : Experience{
        return EXPERIENCE;

    }
}
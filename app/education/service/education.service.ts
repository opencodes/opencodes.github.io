import { Injectable } from '@angular/core';
import { Education} from './education';
import { EDUCATION } from './education.moc.data';

@Injectable()
export class EducationService{
    getEducationDetails(): Education {
        return EDUCATION;
    }
}
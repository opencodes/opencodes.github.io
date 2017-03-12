import { Injectable } from '@angular/core';

import {Resume} from './resume';
import { RESUME} from './resume.moc.data';

@Injectable()
export class ResumeService{
    getResume() : Resume{
        return RESUME;
    }
}
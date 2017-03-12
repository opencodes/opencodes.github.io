import { Injectable } from '@angular/core';
import { RootObject } from './skill';
import { SKILL} from './skill.moc.data';


@Injectable()
export class SkillsService{

    getSkill():RootObject{
        return SKILL;
    }
}
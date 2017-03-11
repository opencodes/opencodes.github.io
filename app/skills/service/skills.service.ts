import { Injectable } from '@angular/core';
import { Skill } from './skill';
import { SKILL} from './skill.moc.data';
@Injectable()
export class SkillsService{
getSkills():Skill[]{
        return SKILL;

    }
}
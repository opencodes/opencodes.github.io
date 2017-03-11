import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent }  from './app.component';
import { RoutingConfig }  from './routing.config';

//Common
import { PageNotFoundComponent }  from './common/components/page.not.found.component';
import { PageService} from './common/service/page.service';

//Education
import { EducationComponent }  from './education/components/education.component';
import { EducationService} from './education/service/education.service';

//Experience
import { ExperienceComponent }  from './experience/components/experience.component';
import { ExperienceService} from './experience/service/experience.service';

//Fun
import { FunComponent }  from './fun/components/fun.component';
import { FunService} from './fun/service/fun.service';

//Profile
import { ProfileComponent }  from './profile/components/profile.component';
import { ProfileService} from './profile/service/profile.service';

//Projects
import { ProjectComponent }  from './projects/components/project.component';
import { ProjectService} from './projects/service/project.service';

//Projects
import { ResumeComponent }  from './resume/components/resume.component';
import { ResumeService} from './resume/service/resume.service';

//Skills
import { SkillsComponent }  from './skills/components/skills.component';
import { SkillsService} from './skills/service/skills.service';

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(RoutingConfig) ],
    
  declarations: [ 
      AppComponent,
      EducationComponent, 
      ExperienceComponent, 
      FunComponent, 
      PageNotFoundComponent, 
      ProfileComponent ,
      ProjectComponent,
      ResumeComponent,
      SkillsComponent],
    
  bootstrap:    [ AppComponent ],
    
  providers:    [ 
      PageService, 
      EducationService, 
      ExperienceService, 
      FunService, 
      ProfileService, 
      ProjectService,
      ResumeService,
      SkillsService
  ]
})
export class AppModule { }

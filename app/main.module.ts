import { NgModule , NO_ERRORS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent }  from './app.component';
import { RoutingConfig }  from './routing.config';

//Common
import { AboutmeComponent }  from './aboutme/components/aboutme.component';
import { AboutmeService} from './aboutme/service/aboutme.service';
//Widget
import {Box} from './widgets/box.component';

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
  imports:      [ BrowserModule, 
      HttpModule,
      FormsModule, 
      RouterModule.forRoot(RoutingConfig) ],
    
  declarations: [ 
      AppComponent,
      AboutmeComponent,
      Box,
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
      AboutmeService,
      PageService, 
      EducationService, 
      ExperienceService, 
      FunService, 
      ProfileService, 
      ProjectService,
      ResumeService,
      SkillsService
  ],
  schemas:      [ NO_ERRORS_SCHEMA ] // Angular 2 does not recognize the card-body tag. card-body is neither a directive nor a component. A quick way to get around this error is to add schema metadata property in your module, set value to NO_ERRORS_SCHEMA in your module file.
})
export class AppModule { }

import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { ProfileComponent }  from './profile/components/profile.component';
import { PageNotFoundComponent }  from './common/components/page.not.found.component';
import { EducationComponent }  from './education/components/education.component';
import { ExperienceComponent }  from './experience/components/experience.component';
import { FunComponent }  from './fun/components/fun.component';
import { ProjectComponent }  from './projects/components/project.component';
import { ResumeComponent }  from './resume/components/resume.component';
import { SkillsComponent }  from './skills/components/skills.component';

const RoutingConfig: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'fun', component: FunComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '**', component: PageNotFoundComponent }
];
export { RoutingConfig };
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profile_component_1 = require("./profile/components/profile.component");
var page_not_found_component_1 = require("./common/components/page.not.found.component");
var education_component_1 = require("./education/components/education.component");
var experience_component_1 = require("./experience/components/experience.component");
var fun_component_1 = require("./fun/components/fun.component");
var project_component_1 = require("./projects/components/project.component");
var resume_component_1 = require("./resume/components/resume.component");
var skills_component_1 = require("./skills/components/skills.component");
var RoutingConfig = [
    { path: '', component: profile_component_1.ProfileComponent },
    { path: 'education', component: education_component_1.EducationComponent },
    { path: 'experience', component: experience_component_1.ExperienceComponent },
    { path: 'fun', component: fun_component_1.FunComponent },
    { path: 'project', component: project_component_1.ProjectComponent },
    { path: 'resume', component: resume_component_1.ResumeComponent },
    { path: 'skills', component: skills_component_1.SkillsComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
exports.RoutingConfig = RoutingConfig;
//# sourceMappingURL=routing.config.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var routing_config_1 = require("./routing.config");
//Common
var page_not_found_component_1 = require("./common/components/page.not.found.component");
var page_service_1 = require("./common/service/page.service");
//Education
var education_component_1 = require("./education/components/education.component");
var education_service_1 = require("./education/service/education.service");
//Experience
var experience_component_1 = require("./experience/components/experience.component");
var experience_service_1 = require("./experience/service/experience.service");
//Fun
var fun_component_1 = require("./fun/components/fun.component");
var fun_service_1 = require("./fun/service/fun.service");
//Profile
var profile_component_1 = require("./profile/components/profile.component");
var profile_service_1 = require("./profile/service/profile.service");
//Projects
var project_component_1 = require("./projects/components/project.component");
var project_service_1 = require("./projects/service/project.service");
//Projects
var resume_component_1 = require("./resume/components/resume.component");
var resume_service_1 = require("./resume/service/resume.service");
//Skills
var skills_component_1 = require("./skills/components/skills.component");
var skills_service_1 = require("./skills/service/skills.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(routing_config_1.RoutingConfig)],
        declarations: [
            app_component_1.AppComponent,
            education_component_1.EducationComponent,
            experience_component_1.ExperienceComponent,
            fun_component_1.FunComponent,
            page_not_found_component_1.PageNotFoundComponent,
            profile_component_1.ProfileComponent,
            project_component_1.ProjectComponent,
            resume_component_1.ResumeComponent,
            skills_component_1.SkillsComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            page_service_1.PageService,
            education_service_1.EducationService,
            experience_service_1.ExperienceService,
            fun_service_1.FunService,
            profile_service_1.ProfileService,
            project_service_1.ProjectService,
            resume_service_1.ResumeService,
            skills_service_1.SkillsService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=main.module.js.map
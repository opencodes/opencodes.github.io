"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var experience_service_1 = require("../service/experience.service");
var ExperienceComponent = (function () {
    function ExperienceComponent(_experienceService) {
        this._experienceService = _experienceService;
    }
    ExperienceComponent.prototype.getExperienceDetails = function () {
        this.data = this._experienceService.getExperience();
    };
    ExperienceComponent.prototype.ngOnInit = function () {
        this.getExperienceDetails();
    };
    return ExperienceComponent;
}());
ExperienceComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/experience/html/experience.html",
        providers: [experience_service_1.ExperienceService]
    }),
    __metadata("design:paramtypes", [experience_service_1.ExperienceService])
], ExperienceComponent);
exports.ExperienceComponent = ExperienceComponent;
//# sourceMappingURL=experience.component.js.map
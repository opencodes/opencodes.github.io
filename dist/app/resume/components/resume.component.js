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
var resume_service_1 = require("../service/resume.service");
var ResumeComponent = (function () {
    function ResumeComponent(_resumeService) {
        this._resumeService = _resumeService;
    }
    ResumeComponent.prototype.getResume = function () {
        this.data = this._resumeService.getResume();
    };
    ResumeComponent.prototype.ngOnInit = function () {
        this.getResume();
    };
    return ResumeComponent;
}());
ResumeComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/resume/html/resume.html",
        providers: [resume_service_1.ResumeService]
    }),
    __metadata("design:paramtypes", [resume_service_1.ResumeService])
], ResumeComponent);
exports.ResumeComponent = ResumeComponent;
//# sourceMappingURL=resume.component.js.map
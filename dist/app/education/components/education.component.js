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
var education_service_1 = require("../service/education.service");
var EducationComponent = (function () {
    function EducationComponent(_educationService) {
        this._educationService = _educationService;
    }
    EducationComponent.prototype.getEducationDetails = function () {
        this.data = this._educationService.getEducationDetails();
    };
    EducationComponent.prototype.ngOnInit = function () {
        this.getEducationDetails();
    };
    return EducationComponent;
}());
EducationComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/education/html/education.html",
        providers: [education_service_1.EducationService]
    }),
    __metadata("design:paramtypes", [education_service_1.EducationService])
], EducationComponent);
exports.EducationComponent = EducationComponent;
//# sourceMappingURL=education.component.js.map
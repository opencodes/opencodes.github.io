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
var form_class_1 = require("../service/form.class");
var aboutme_service_1 = require("../service/aboutme.service");
var AboutmeComponent = (function () {
    function AboutmeComponent(_service) {
        this._service = _service;
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.model = new form_class_1.FormClass(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
        this.submitted = false;
    }
    AboutmeComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(AboutmeComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    AboutmeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getPosts().then(function (post) { return _this.posts = post; }, function (error) { return _this.errorMessage = error; });
    };
    return AboutmeComponent;
}());
AboutmeComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/aboutme/html/aboutme.html",
        providers: [aboutme_service_1.AboutmeService]
    }),
    __metadata("design:paramtypes", [aboutme_service_1.AboutmeService])
], AboutmeComponent);
exports.AboutmeComponent = AboutmeComponent;
//# sourceMappingURL=aboutme.component.js.map
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
var profile_service_1 = require("../service/profile.service");
var ProfileComponent = (function () {
    function ProfileComponent(_profileService) {
        this._profileService = _profileService;
        this.profile = "";
        this.profiledetails = {
            name: "",
            email: "",
            phone: "",
            social: ""
        };
        this.title = "Profile";
    }
    ProfileComponent.prototype.getProfile = function () {
        var _this = this;
        this._profileService.getProfile().then(function (profile) {
            _this.profiledetails.name = profile.name.firstname + " " + profile.name.middlename + " " + profile.name.lastname;
            _this.profiledetails.phone = profile.phone;
            _this.profiledetails.email = profile.email;
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/profile/html/profile.html",
        providers: [profile_service_1.ProfileService]
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map
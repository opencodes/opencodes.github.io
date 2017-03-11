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
var fun_service_1 = require("../service/fun.service");
var FunComponent = (function () {
    function FunComponent(_funService) {
        this._funService = _funService;
        this.title = "Fun";
    }
    return FunComponent;
}());
FunComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/fun/html/fun.html",
        providers: [fun_service_1.FunService]
    }),
    __metadata("design:paramtypes", [fun_service_1.FunService])
], FunComponent);
exports.FunComponent = FunComponent;
//# sourceMappingURL=fun.component.js.map
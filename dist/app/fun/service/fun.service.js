"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fun_moc_data_1 = require("./fun.moc.data");
var FunService = (function () {
    function FunService() {
    }
    FunService.prototype.getFun = function () {
        return fun_moc_data_1.FUN;
    };
    return FunService;
}());
FunService = __decorate([
    core_1.Injectable()
], FunService);
exports.FunService = FunService;
//# sourceMappingURL=fun.service.js.map
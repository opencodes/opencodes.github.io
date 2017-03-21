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
var Box = (function () {
    function Box() {
    }
    return Box;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Box.prototype, "headerText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Box.prototype, "footerText", void 0);
Box = __decorate([
    core_1.Component({
        selector: "box",
        template: "<div class=\"box\">\n                    <div class=\"box-header\">\n                    <!-- header slot here -->\n                        <ng-content select=\"box-header\"></ng-content>\n                    </div>\n                    <!-- body slot here -->\n                    <ng-content select=\"box-body\"></ng-content>\n                    <div class=\"box-footer\">\n                    <!-- footer -->\n                        <ng-content select=\"box-footer\"></ng-content>\n                    </div>\n                </div>",
    })
], Box);
exports.Box = Box;
//# sourceMappingURL=box.components.js.map
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
var core_1 = require('@angular/core');
var SliderComponent = (function () {
    function SliderComponent() {
        this.name = 'Max';
    }
    SliderComponent.prototype.onRangeChange = function () {
        console.log('valueChanged');
    };
    SliderComponent.prototype.sayMyName = function () {
        console.log('My name is', this.name);
    };
    SliderComponent = __decorate([
        core_1.Component({
            selector: 'slider',
            template: "<ng2-slider \n\t\t\t    min=\"6\"\n\t\t\t    max=\"23\"\n\t\t\t    startValue=\"9\"\n\t\t\t    endValue=\"21\"\n\t\t\t    stepValue=\"2\"\n\t\t\t    [normalHandlerStyle]=\"{ 'background-color': 'green'}\"\n\t\t\t    [slidingHandlerStyle]=\"{\n\t\t\t          'border-radius': '9px',\n\t\t\t          'background-color': 'red'\n\t\t\t    }\">\n\t\t\t</ng2-slider>"
        }), 
        __metadata('design:paramtypes', [])
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
//# sourceMappingURL=slider.component.js.map
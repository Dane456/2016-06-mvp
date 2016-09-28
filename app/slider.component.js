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
var slider_service_1 = require('./slider.service');
var SliderComponent = (function () {
    function SliderComponent(sliderService) {
        this.sliderService = sliderService;
        this.nativeInput = 0;
        this.dataChange = 0;
    }
    SliderComponent.prototype.onChange = function () {
        var _this = this;
        this.nativeInput = this.sliderInput;
        this.sliderService.postInput({ username: 'user1', input: this.sliderInput })
            .subscribe(function (response) {
            console.log('Angular2 Post response: ', response);
        });
        this.sliderService.getInput()
            .subscribe(function (allData) {
            _this.dataChange = allData[0].input;
            console.log('Angular2 Get Response :', allData);
        });
    };
    SliderComponent = __decorate([
        core_1.Component({
            selector: 'slider',
            template: "<h1>Direct Data-Bound Input</h1>\n  \t\t\t<h1>{{sliderInput}}</h1>\n  \t\t\t<h3>Server Data</h3>\n  \t\t\t<h3>{{dataChange}}</h3>\n  \t\t\t<input [(ngModel)]=\"sliderInput\" (change)=onChange() type=\"range\">",
            providers: [slider_service_1.SliderService]
        }), 
        __metadata('design:paramtypes', [slider_service_1.SliderService])
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
//# sourceMappingURL=slider.component.js.map
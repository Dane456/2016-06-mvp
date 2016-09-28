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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var SliderService = (function () {
    function SliderService(_http) {
        this._http = _http;
    }
    SliderService.prototype.postInput = function (data) {
        console.log('Posting from sliderService: ', data);
        return this._http.post('/sessionInput', data)
            .map(function (res) { return res.json(); });
    };
    SliderService.prototype.getInput = function () {
        return this._http.get('/sessionInput')
            .map(function (res) { return res.json(); });
    };
    SliderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SliderService);
    return SliderService;
}());
exports.SliderService = SliderService;
//# sourceMappingURL=slider.service.js.map
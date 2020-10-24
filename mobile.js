"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.getname = function () {
        return this.name;
    };
    Mobile.prototype.getmodel = function () {
        return this.model;
    };
    Mobile.prototype.gettrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getsdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.getcolor = function () {
        return this.color;
    };
    Mobile.prototype.getis5G = function () {
        return this.is5G;
    };
    Mobile.prototype.getcameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.getprice = function () {
        return this.price;
    };
    Mobile.prototype.setname = function (name) {
        this.name = name;
    };
    Mobile.prototype.setmodel = function (model) {
        this.model = model;
    };
    Mobile.prototype.settrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.setsdSize = function (sdSize) {
        this.sdSize = sdSize;
    };
    Mobile.prototype.setcolor = function (color) {
        this.color = color;
    };
    Mobile.prototype.setis5G = function (is5G) {
        this.is5G = is5G;
    };
    Mobile.prototype.setcameraNumber = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    Mobile.prototype.setprice = function (price) {
        this.price = price;
    };
    Mobile.prototype.toString = function () {
        var telefono = '';
        var cobertura = "SI";
        if (this.is5G == false) {
            cobertura = "NO";
        }
        telefono += "\n                    \n\n                    \"The characteristics of the mobile " + this.name + " are:\"\n                    \u00B7 Name: " + this.name + "\n                    \u00B7 Model: " + this.model + "\n                    \u00B7 Trademark: " + this.trademark + "\n                    \u00B7 SD Size (GB): " + this.sdSize + "\n                    \u00B7 Color: " + this.color + "\n                    \u00B7 Is 5g?: " + cobertura + "\n                    \u00B7 Number of Cameras: " + this.cameraNumber + "\n                    ";
        console.log(telefono);
    };
    return Mobile;
}());
exports.Mobile = Mobile;

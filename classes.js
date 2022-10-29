"use strict";
exports.__esModule = true;
exports.Sled = exports.Santa = exports.Bag = exports.Present = void 0;
var enums_1 = require("./enums");
var Present = /** @class */ (function () {
    function Present(name, weight, presentType) {
        this.name = name;
        this.weight = weight;
        this.presentType = presentType;
    }
    Present.prototype.print = function () {
        console.log(this.name + " " + this.weight + " " + this.presentType);
    };
    Present.prototype.isHard = function () {
        return this.presentType === enums_1.PresentType.Hard;
    };
    return Present;
}());
exports.Present = Present;
var Bag = /** @class */ (function () {
    function Bag(maxWeight, bagType) {
        this.maxWeight = maxWeight;
        this.bagType = bagType;
    }
    return Bag;
}());
exports.Bag = Bag;
var Santa = /** @class */ (function () {
    function Santa(name, age) {
        this.name = name;
        this.age = age;
    }
    return Santa;
}());
exports.Santa = Santa;
var Sled = /** @class */ (function () {
    function Sled(santa, bag) {
        this.santa = santa;
        this.bag = bag;
    }
    return Sled;
}());
exports.Sled = Sled;

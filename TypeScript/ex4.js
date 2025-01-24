"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bowler = void 0;
var ex2_1 = require("./ex2");
var Bowler = /** @class */ (function (_super) {
    __extends(Bowler, _super);
    function Bowler(name, age, isCaptain, wicketsTaken, bowlingAverage) {
        var _this = _super.call(this, name, age, isCaptain) || this;
        _this.wicketsTaken = wicketsTaken;
        _this.bowlingAverage = bowlingAverage;
        return _this;
    }
    Bowler.prototype.getPlayerInfo = function () {
        var baseInfo = _super.prototype.getPlayerInfo.call(this);
        return "".concat(baseInfo, ", Wickets Taken: ").concat(this.wicketsTaken, ", Bowling Average: ").concat(this.bowlingAverage);
    };
    return Bowler;
}(ex2_1.Players));
exports.Bowler = Bowler;
var bowler1 = new Bowler("Bhuvaneshwar Kumar", 34, false, 294, 26.09);
console.log(bowler1.getPlayerInfo());
var bowler2 = new Bowler("Mohammed Shami", 34, false, 448, 26.06);
console.log(bowler2.getPlayerInfo());
var bowler3 = new Bowler("Jasprit Bumrah", 30, false, 411, 21.03);
console.log(bowler3.getPlayerInfo());

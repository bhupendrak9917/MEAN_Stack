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
exports.Batsman = exports.Players = void 0;
var Players = /** @class */ (function () {
    function Players(name, age, isCaptain) {
        this.name = name;
        this.age = age;
        this.isCaptain = isCaptain;
    }
    Players.prototype.getPlayerInfo = function () {
        var captainStatus = this.isCaptain ? "Captain" : "Player";
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Role: ").concat(captainStatus);
    };
    return Players;
}());
exports.Players = Players;
var Batsman = /** @class */ (function (_super) {
    __extends(Batsman, _super);
    function Batsman(name, age, isCaptain, runsScored, battingAverage) {
        var _this = _super.call(this, name, age, isCaptain) || this;
        _this.runsScored = runsScored;
        _this.battingAverage = battingAverage;
        return _this;
    }
    Batsman.prototype.getPlayerInfo = function () {
        var baseInfo = _super.prototype.getPlayerInfo.call(this);
        return "".concat(baseInfo, ", Runs Scored: ").concat(this.runsScored, ", Batting Average: ").concat(this.battingAverage);
    };
    return Batsman;
}(Players));
exports.Batsman = Batsman;
var players1 = new Players("Tilak Verma", 22, true);
console.log(players1.getPlayerInfo());
var players2 = new Players("Abhishek Sharma", 24, false);
console.log(players2.getPlayerInfo());
var batsman1 = new Batsman("Sanju Samson", 30, false, 510, 56.6);
console.log(batsman1.getPlayerInfo());

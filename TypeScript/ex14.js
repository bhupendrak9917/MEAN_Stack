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
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.startEngine = function () {
        console.log("Engine started.");
    };
    Vehicle.prototype.checkBattery = function () {
        console.log("Battery is in good condition.");
    };
    Vehicle.prototype.fuelStatus = function () {
        console.log("Fuel tank is full.");
    };
    Vehicle.prototype.vehicleInfo = function () {
        console.log("This is a generic vehicle.");
        this.checkBattery();
        this.fuelStatus();
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.playMusic = function () {
        console.log("Playing music.");
    };
    Car.prototype.vehicleInfo = function () {
        console.log("This is a car.");
        _super.prototype.vehicleInfo.call(this);
    };
    return Car;
}(Vehicle));
var car1 = new Car();
car1.startEngine();
car1.playMusic();
car1.vehicleInfo();

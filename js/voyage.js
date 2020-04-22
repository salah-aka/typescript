"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Sejour.prototype.toString = function () {
        return this._nom + " - " + this._prix;
    };
    Sejour.prototype.getNom = function () {
        return this._nom;
    };
    Sejour.prototype.getId = function () {
        return this._prix;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = [new Sejour('Marseille', 200), new Sejour('Paris', 100), new Sejour('Nantes', 1000), new Sejour('Toulouse', 10)];
    }
    SejourService.prototype.findByName = function (sejourName) {
        for (var _i = 0, _a = this._sejours; _i < _a.length; _i++) {
            var sejour = _a[_i];
            if (sejour.getNom() === sejourName) {
                return sejour;
            }
        }
    };
    return SejourService;
}());
var sejourService = new SejourService();
console.log(sejourService.findByName('Marseille'));

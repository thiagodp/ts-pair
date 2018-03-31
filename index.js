"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractPair = /** @class */ (function () {
    function AbstractPair(_first, _second) {
        this._first = _first;
        this._second = _second;
    }
    AbstractPair.prototype.getFirst = function () {
        return this._first;
    };
    AbstractPair.prototype.getSecond = function () {
        return this._second;
    };
    AbstractPair.prototype.equals = function (other) {
        return other.getFirst() === this.first && other.getSecond() === this.second;
    };
    AbstractPair.prototype.toArray = function () {
        return [this._first, this._second];
    };
    AbstractPair.prototype.toJSON = function () {
        var obj = { first: this._first, second: this._second };
        return JSON.stringify(obj);
    };
    Object.defineProperty(AbstractPair.prototype, "first", {
        get: function () {
            return this._first;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractPair.prototype, "second", {
        get: function () {
            return this._second;
        },
        enumerable: true,
        configurable: true
    });
    AbstractPair.prototype.toString = function () {
        return '[' + this._first + ', ' + this._second + ']';
    };
    ;
    return AbstractPair;
}());
exports.AbstractPair = AbstractPair;
var Pair = /** @class */ (function (_super) {
    __extends(Pair, _super);
    function Pair() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pair.prototype.setFirst = function (first) {
        this._first = first;
        return this; // chainable
    };
    Pair.prototype.setSecond = function (second) {
        this._second = second;
        return this; // chainable
    };
    Object.defineProperty(Pair.prototype, "first", {
        set: function (first) {
            this._first = first;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pair.prototype, "second", {
        set: function (second) {
            this._second = second;
        },
        enumerable: true,
        configurable: true
    });
    return Pair;
}(AbstractPair));
exports.Pair = Pair;
var ImmutablePair = /** @class */ (function (_super) {
    __extends(ImmutablePair, _super);
    function ImmutablePair() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ImmutablePair;
}(AbstractPair));
exports.ImmutablePair = ImmutablePair;
//# sourceMappingURL=index.js.map
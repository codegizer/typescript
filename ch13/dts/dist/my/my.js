"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyLibrary;
(function (MyLibrary) {
    function getMaxNumber(array) {
        return Math.max.apply(Math, array);
    }
    MyLibrary.getMaxNumber = getMaxNumber;
    function getMinNumber(array) {
        return Math.min.apply(Math, array);
    }
})(MyLibrary = exports.MyLibrary || (exports.MyLibrary = {}));

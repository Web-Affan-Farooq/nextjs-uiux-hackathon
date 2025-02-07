"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createKey = void 0;
var createKey = function (length) {
    var allChars = ""; // suppose the key is blank string
    // strings containing lowercase upppercase special case and number characters 
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var specialChars = "`~!@#$%^&*()-_+={}[]|\/.,<>";
    var numbers = "0123456789";
    allChars += uppercase;
    allChars += lowercase;
    allChars += specialChars;
    allChars += numbers;
    var pass = [];
    if (length) {
        for (var i = 0; i <= length; i++) {
            var index = Math.floor(Math.random() * allChars.length + 1);
            pass.push(allChars.split("")[index]);
        }
        return pass.toString();
    }
    else {
        for (var i = 0; i <= 10; i++) {
            var index = Math.floor(Math.random() * allChars.length + 1);
            pass.push(allChars.split("")[index]);
        }
        return pass.toString().replace(/,/g, "");
    }
};
exports.createKey = createKey;
console.log((0, exports.createKey)());

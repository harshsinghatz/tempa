"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = exports.isNewLine = exports.isLetter = exports.isWhiteSpace = exports.isHash = void 0;
// Curried function 
const curriedFunc = (regex) => {
    return (str) => regex.test(str);
};
exports.isHash = curriedFunc(/[#]/);
exports.isWhiteSpace = curriedFunc(/[" "]/);
exports.isLetter = curriedFunc(/[a-zA-Z]/);
exports.isNewLine = curriedFunc(/\n/);
exports.isNumber = curriedFunc(/[0-9]/);

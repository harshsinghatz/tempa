"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const identify_1 = require("../utils/identify");
const token_1 = __importDefault(require("../utils/token"));
const tokenize = (code) => {
    let pointer = 0;
    const tokens = [];
    while (pointer < code.length) {
        const char = code[pointer];
        // parse the type and value of the tokens present in the code
        // Skip newline/whitespace character
        if ((0, identify_1.isWhiteSpace)(char) || (0, identify_1.isNewLine)(char)) {
            pointer++;
            continue;
        }
        // Tokenize the paragraph 
        if ((0, identify_1.isLetter)(char) || (0, identify_1.isNumber)(char)) {
            let paragraph = char;
            while (((0, identify_1.isLetter)(code[++pointer]) || (0, identify_1.isWhiteSpace)(code[pointer]) || (0, identify_1.isNumber)(code[pointer])) && !((0, identify_1.isNewLine)(code[pointer]))) {
                paragraph += code[pointer];
            }
            tokens.push(token_1.default.PARAGRAPH(paragraph));
            pointer++;
            continue;
        }
        // Tokenize the headings
        if ((0, identify_1.isHash)(char)) {
            let count = 0;
            while ((0, identify_1.isHash)(code[++pointer])) {
                count++;
                if (count === 3)
                    break;
            }
            let heading = "";
            while (!(0, identify_1.isNewLine)(code[pointer])) {
                heading += code[pointer];
                ++pointer;
            }
            tokens.push(token_1.default.HEADING(heading, count));
            // refactor this repeted code
            pointer++;
            continue;
        }
        // If there is an unexpected character/keyword
        throw new Error(`${char} is not an valid keyword.`);
    }
    return tokens;
};
exports.default = tokenize;

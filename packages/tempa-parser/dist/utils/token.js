"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TOKENS = {
    HASH: {
        type: "Hash",
        value: "#",
    },
    LETTER(letter) {
        return ({
            type: "Letter",
            value: letter
        });
    },
    HEADING(heading, count) {
        return {
            type: `Heading-${count + 1}`,
            value: heading
        };
    },
    PARAGRAPH(paragraph) {
        return {
            type: "Paragraph",
            value: paragraph
        };
    }
};
exports.default = TOKENS;

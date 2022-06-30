"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SvgXml = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SvgXml = ({ xml, width, height }) => {
    return (0, jsx_runtime_1.jsx)("span", { style: {
            width,
            height
        }, dangerouslySetInnerHTML: {
            __html: xml
        } });
};
exports.SvgXml = SvgXml;

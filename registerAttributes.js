"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Australian_1 = require("./Australian");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Australian',
    nation: 'Australia',
    colors: ['#1A7F4B', '#FFCD00'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Australian_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map
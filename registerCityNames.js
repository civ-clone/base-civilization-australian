"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Australian_1 = require("./Australian");
const CityName_1 = require("@civ-clone/core-civilization/CityName");
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
// The first is the capital.
[
    'Canberra',
    'Sydney',
    'Melbourne',
    'Brisbane',
    'Perth',
    'Adelaide',
    'Hobart',
    'Darwin',
    'Newcastle',
    'Wollongong',
    'Geelong',
    'Townsville',
    'Cairns',
    'Ballarat',
    'Bendigo',
    'Launceston',
    'Toowoomba',
    'Albury',
    'Mackay',
    'Rockhampton',
    'Bunbury',
    'Bundaberg',
    'Wagga Wagga',
    'Mildura',
    'Shepparton',
    'Gladstone',
    'Port Macquarie',
    'Tamworth',
    'Dubbo',
    'Alice Springs',
    'Broome',
    'Kalgoorlie',
].forEach((name, i) => CityNameRegistry_1.instance.register(new CityName_1.default(name, Australian_1.default, i === 0)));
//# sourceMappingURL=registerCityNames.js.map
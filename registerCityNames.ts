import Australian from './Australian';
import CityName from '@civ-clone/core-civilization/CityName';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';

// The first is the capital.
(
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
  ] as string[]
).forEach((name, i): void =>
  cityNameRegistryInstance.register(new CityName(name, Australian, i === 0))
);

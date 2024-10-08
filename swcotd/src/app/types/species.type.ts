import { Planet } from './planet.type';

export type Species = {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;
    people: Array<string>;
    films: Array<string>;
    created: string;
    edited: string;
    url: string;
};

export const aSpecies = (overwrites: Partial<Species> = {}): Species => ({
    name: 'Human',
    classification: 'mammal',
    designation: 'sentient',
    average_height: '180',
    skin_colors: 'caucasian, black, asian, hispanic',
    hair_colors: 'blonde, brown, black, red',
    eye_colors: 'brown, blue, green, hazel, grey, amber',
    average_lifespan: '120',
    homeworld: 'https://swapi.dev/api/planets/9/',
    language: 'Galactic Basic',
    people: [
        'https://swapi.dev/api/people/66/',
        'https://swapi.dev/api/people/67/',
        'https://swapi.dev/api/people/68/',
        'https://swapi.dev/api/people/74/'
    ],
    films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/4/',
        'https://swapi.dev/api/films/5/',
        'https://swapi.dev/api/films/6/'
    ],
    created: '2014-12-10T13:52:11.567000Z',
    edited: '2014-12-20T21:36:42.136000Z',
    url: 'https://swapi.dev/api/species/1/',
});

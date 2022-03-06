import { Person, PersonResponse } from "./interfaces/Person.interface";
import { Starship, StarshipResponse } from "./interfaces/Starship.interface";

export const selectRandomObjectProperty = (properties: string[]): string => {
  return properties[Math.floor(Math.random() * properties.length)];
};

//this could be achieved through typescript as well
export const mapPersonProperties = (person: PersonResponse): Person => {
  return {
    birth_year: person.birth_year,
    created: new Date(person.created),
    edited: new Date(person.edited),
    eye_color: person.eye_color,
    films: person.films,
    gender: person.gender,
    hair_color: person.hair_color,
    height: parseFloat(person.height),
    homeworld: person.homeworld,
    mass: parseFloat(person.mass),
    name: person.name,
    skin_color: person.skin_color,
    species: person.species,
    starships: person.starships,
    url: person.url,
    vehicles: person.vehicles,
  };
};

export const mapStarshipProperties = (starship: StarshipResponse): Starship => {
  return {
    created: new Date(starship.created),
    edited: new Date(starship.edited),
    MGLT: starship.MGLT,
    cargo_capacity: parseFloat(starship.cargo_capacity),
    consumables: starship.consumables,
    cost_in_credits: parseFloat(starship.cost_in_credits),
    crew: parseFloat(starship.crew),
    hyperdrive_rating: parseFloat(starship.hyperdrive_rating),
    length: parseFloat(starship.length),
    manufacturer: starship.manufacturer,
    max_atmosphering_speed: starship.max_atmosphering_speed,
    model: starship.model,
    name: starship.name,
    passengers: parseFloat(starship.passengers),
    films: starship.films,
    pilots: starship.pilots,
    starship_class: starship.starship_class,
    url: starship.url,
  };
};

export const getEligibleProperties = (object: object) => {
  const keys = Object.keys(object);
  const eligibleProperties: string[] = [];
  keys.forEach((key: string) => {
    //we want the fight to happen only between number data types
    if (typeof object[key as keyof object] === "number") {
      eligibleProperties.push(key);
    }
  });
  return eligibleProperties;
};

//Pick random number from range of 1 to limit
export const getRandomIds = (limit: number) => {
  let firstNumber: number;
  let secondNumber: number;
  do {
    firstNumber = Math.floor(Math.random() * limit) + 1;
    secondNumber = Math.floor(Math.random() * limit) + 1;
  } while (firstNumber === secondNumber);

  return [firstNumber, secondNumber];
};

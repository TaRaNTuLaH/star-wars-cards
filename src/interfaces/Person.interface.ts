import { CommonResponseInterface } from "./Common.interface";

export interface PersonResponse extends CommonResponseInterface {
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  skin_color: string;
  species: string[];
  starships: string[];
  vehicles: string[];
}

export interface Person
  extends Omit<PersonResponse, "height" | "mass" | "created" | "edited"> {
  height: number;
  mass: number;
  created: Date;
  edited: Date;
}

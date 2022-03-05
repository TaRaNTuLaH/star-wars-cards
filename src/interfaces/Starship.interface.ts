import { CommonResponseInterface } from "./Common.interface";

export interface StarshipResponse extends CommonResponseInterface {
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  pilots: string[];
}

export interface Starship
  extends Omit<
    StarshipResponse,
    | "cost_in_credits"
    | "length"
    | "crew"
    | "passengers"
    | "hyperdrive_rating"
    | "cargo_capacity"
    | "created"
    | "edited"
  > {
  cost_in_credits: number;
  length: number;
  crew: number;
  passengers: number;
  hyperdrive_rating: number;
  cargo_capacity: number;
  created: Date;
  edited: Date;
}

import { apiGet } from "../index";
import { Response } from "../../interfaces/Common.interface";
import { StarshipResponse } from "../../interfaces/Starship.interface";

const STARSHIP_API_PATH = "/starships";

export async function getStarships(): Promise<Response<StarshipResponse[]>> {
  return await apiGet<Response<StarshipResponse[]>>(STARSHIP_API_PATH);
}
export async function getStarship(id: number): Promise<StarshipResponse> {
  return await apiGet<StarshipResponse>(`${STARSHIP_API_PATH}/${id}`);
}

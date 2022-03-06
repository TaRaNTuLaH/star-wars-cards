import { apiGet } from "../index";
import { Response } from "../../interfaces/Common.interface";
import { PersonResponse } from "../../interfaces/Person.interface";

const PEOPLE_API_PATH = "/people";

export async function getPeople(): Promise<Response<PersonResponse[]>> {
  return await apiGet<Response<PersonResponse[]>>(PEOPLE_API_PATH);
}

export async function getPerson(id: number): Promise<PersonResponse> {
  return await apiGet<PersonResponse>(`${PEOPLE_API_PATH}/${id}`);
}

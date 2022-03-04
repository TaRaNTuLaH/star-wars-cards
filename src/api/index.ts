import axios from "axios";

export const API_URL = process.env.API_URL || "https://swapi.dev/api/";

export const api = axios.create({
  baseURL: API_URL,
});

export async function apiGet<T>(url: string) {
  const response = await api.get<T>(url);
  return response.data;
}

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Card } from "./Card";

test("renders person card", () => {
  render(
    <Card
      data={{
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        homeworld: "https://swapi.dev/api/planets/1/",
        films: [
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/6/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/7/",
        ],
        species: ["https://swapi.dev/api/species/1/"],
        vehicles: [
          "https://swapi.dev/api/vehicles/14/",
          "https://swapi.dev/api/vehicles/30/",
        ],
        starships: [
          "https://swapi.dev/api/starships/12/",
          "https://swapi.dev/api/starships/22/",
        ],
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:56.891000Z",
        url: "https://swapi.dev/api/people/1/",
      }}
    />
  );
  const luke = screen.getByText(/Luke Skywalker/i);
  const height = screen.getByText(/172/i);
  expect(luke).toBeInTheDocument();
  expect(height).toBeInTheDocument();
});

test("renders starship card", () => {
  render(
    <Card
      data={{
        name: "Death Star",
        model: "DS-1 Orbital Battle Station",
        manufacturer:
          "Imperial Department of Military Research, Sienar Fleet Systems",
        cost_in_credits: "1000000000000",
        length: "120000",
        max_atmosphering_speed: "n/a",
        crew: "342,953",
        passengers: "843,342",
        cargo_capacity: "1000000000000",
        consumables: "3 years",
        hyperdrive_rating: "4.0",
        MGLT: "10",
        starship_class: "Deep Space Mobile Battlestation",
        pilots: [],
        films: ["https://swapi.dev/api/films/1/"],
        created: "2014-12-10T16:36:50.509000Z",
        edited: "2014-12-20T21:26:24.783000Z",
        url: "https://swapi.dev/api/starships/9/",
      }}
    />
  );
  const deathStar = screen.getByText(/Death Star/i);
  const crew = screen.getByText(/342,953/i);
  expect(deathStar).toBeInTheDocument();
  expect(crew).toBeInTheDocument();
});

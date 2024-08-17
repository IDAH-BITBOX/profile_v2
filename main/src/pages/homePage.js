import { Component } from "../components/scrollTriggeredAnimation"

const food = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320]
];

export const HomePage =()=> {
  return food.map(([sector, hueA, hueB]) => (
    <Component sector={sector} hueA={hueA} hueB={hueB} key={sector} />
  ));
}


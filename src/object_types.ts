type Year = number;
const currentYear: Year = 2060;

type Car = {
  name: string;
  brand: string;
  model?: string;
};

const anyCar: Car = {
  name: "BunnyFooty",
  brand: "BMW",
  model: "M440I",
};

type Residence = "House" | "Apartment" | "Townhouse";
const myResidence: Residence = "House";

type BaseStreetFighter = {
  name: string;
  age: number;
  birthPlace: string;
};

console.log(currentYear, anyCar, myResidence)

// type intersection
type Ryu = BaseStreetFighter & {
  specialMoves: string[];
  gamesAppearedIn: Array<string>;
};

const ryu: Ryu = {
  name: "Ryu",
  age: 30,
  birthPlace: "Japan",
  specialMoves: ["Hadouken", "Shoryuken", "Thrust Strike"],
  gamesAppearedIn: [
    "Street Fighter",
    "Street Fighter II",
    "Street Fighter III",
    "Street Fighter IV",
    "Street Fighter V",
  ],
};

console.log(ryu)
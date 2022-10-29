import { BagType, PresentType } from "./enums";

let Santa = {
  name: "Nicolas",
  age: 64,
};

let Sled = {
  santa: Santa,
};

let Bag = {
  weight: 10,
  bagType: BagType.Canvas,
};

let Toy = {
  weight: 8,
  presentType: PresentType.Hard,
};

let Doll = {
  weight: 3,
  presentType: PresentType.Soft,
};

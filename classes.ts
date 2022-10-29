import { BagType, PresentType } from "./enums";

export class Present {
  name: string;
  weight: number;
  presentType: PresentType;

  constructor(name: string, weight: number, presentType: PresentType) {
    this.name = name;
    this.weight = weight;
    this.presentType = presentType;
  }

  print(): void {
    console.log(this.name + " " + this.weight + " " + this.presentType);
  }

  isHard(): boolean {
    return this.presentType === PresentType.Hard;
  }
}

export class Bag {
  maxWeight: number;
  bagType: BagType;

  constructor(maxWeight: number, bagType: BagType) {
    this.maxWeight = maxWeight;
    this.bagType = bagType;
  }
}

export class Santa {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export class Sled {
  santa: Santa;
  bag: Bag;

  constructor(santa: Santa, bag: Bag) {
    this.santa = santa;
    this.bag = bag;
  }
}

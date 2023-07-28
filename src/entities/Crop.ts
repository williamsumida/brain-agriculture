import { v4 } from "uuid";

export class Crop {
  public readonly id: string;

  public name: string;

  constructor(name: string, id?: string) {
    this.name = name;

    if (!id) {
      this.id = v4();
    } else {
      this.id = id;
    }
  }
}

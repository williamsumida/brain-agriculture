import { v4 } from "uuid";
import { Farm } from "./Farm";

export class Farmer {
  public readonly id: string;

  public name: string;
  public cpf: string | null;
  public cnpj: string | null;
  public farm: Farm;

  constructor(
    name: string,
    farm: Farm,
    cpf: string | undefined,
    cnpj: string | undefined,
    id?: string,
  ) {

    this.name = name;
    this.cpf = cpf == undefined ? null : cpf;
    this.cnpj = cnpj == undefined ? null : cnpj;
    this.farm = farm;

    if (!id) {
      this.id = v4();
    } else {
      this.id = id;
    }
  }
}

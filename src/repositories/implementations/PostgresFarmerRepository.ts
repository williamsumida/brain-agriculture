import { Farmer } from "../../entities/Farmer";
import { FarmerRepository } from "../FarmerRepository";
import { db } from "../../database/postgres";

export class PostgresFarmerRepository implements FarmerRepository {
  async create(farmer: Farmer): Promise<void> {
    try {
      await db`
      INSERT INTO farmer(id, name, cnpj, cpf)
      VALUES(
        ${farmer.id}, ${farmer.name}, ${farmer.cnpj}, ${farmer.cpf}, 
      );`;
    } catch (err) {
      console.log(err);
    }
  }

  async update(farmer: Farmer): Promise<void> {

  }

  async delete(farmerId: string): Promise<void> {

  }
}

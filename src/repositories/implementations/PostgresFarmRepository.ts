import { Farm } from "../../entities/Farm";
import { FarmRepository } from "../FarmRepository";
import { db } from "../../database/postgres";

export class PostgresFarmRepository implements FarmRepository {
  async create(farm: Farm, farmerId: string): Promise<void> {
    try {
      await db`
      INSERT INTO farm(id, city, province, area, crop_area, vegetation_area)
      VALUES(
        ${farm.id}, ${farm.city}, ${farm.province}, ${farm.area}, ${farm.cropArea}, ${farm.vegetationArea}
      );`;

      await db`
      INSERT INTO farmer_farm(farmer_id, farm_id)
      VALUES(
        ${farmerId}, ${farm.id}
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

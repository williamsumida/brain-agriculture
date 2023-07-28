import { CropRepository } from "../CropRepository";
import { db } from "../../database/postgres";

export class PostgresCropRepository implements CropRepository {
  async createFarmCrop(crop: string, farmId: string): Promise<void> {
    try {
      const cropResult = await db`
        SELECT id
        FROM crop
        WHERE name = ${crop};
      `;

      await db`
      INSERT INTO farm_crop(farm_id, crop_id)
      VALUES(
        ${farmId}, ${cropResult[0].id}
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

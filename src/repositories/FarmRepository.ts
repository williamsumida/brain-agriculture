import { Farm } from "../entities/Farm";

export interface FarmRepository {
  create(farm: Farm, farmerId: string): Promise<void>;
  update(farm: Farm, farmerId: string): Promise<void>;
  delete(farmId: string): Promise<void>;
}

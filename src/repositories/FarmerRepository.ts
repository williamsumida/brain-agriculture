import { Farmer } from "../entities/Farmer";

export interface FarmerRepository {
  create(farmer: Farmer): Promise<void>;
  update(farmer: Farmer): Promise<void>;
  delete(farmerId: string): Promise<void>;
}

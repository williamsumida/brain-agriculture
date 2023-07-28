export interface CropRepository {
  createFarmCrop(crop: string, farmId: string): Promise<void>;
}

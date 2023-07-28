interface ProvinceFarmStats {
  province: string;
  farmCount: number;
  totalArea: number;
}

interface CropFarmStats {
  crop: string;
  farmCount: number;
}

export class Dashboard {
  public farmCount: number;
  public totalArea: number;
  public totalCropArea: number;
  public totalVegetationArea: number;
  public provinceFarmStats: Array<ProvinceFarmStats>;
  public cropFarmStats: Array<CropFarmStats>;

  constructor(
    farmCount: number,
    totalArea: number,
    totalCropArea: number,
    totalVegetationArea: number,
    provinceFarmStats: Array<ProvinceFarmStats>,
    cropFarmStats: Array<CropFarmStats>
  ) {
    this.farmCount = farmCount;
    this.totalArea = totalArea;
    this.totalCropArea = totalCropArea;
    this.totalVegetationArea = totalVegetationArea;
    this.provinceFarmStats = provinceFarmStats;
    this.cropFarmStats = cropFarmStats;
  }
}

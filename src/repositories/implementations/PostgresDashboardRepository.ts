import { DashboardRepository } from "../DashboardRepository";
import { Dashboard } from "../../entities/Dashboard";
import { db } from "../../database/postgres";

interface ProvinceFarmStats {
  province: string;
  farmCount: number;
  totalArea: number;
}

interface CropFarmStats {
  crop: string;
  farmCount: number;
}

export class PostgresDashboardRepository implements DashboardRepository {
  async get(): Promise<Dashboard> {
    const farmStats = await db`
      SELECT 
        COUNT(*) as farm_count, SUM(area) as total_area, 
        SUM(crop_area) as total_crop_area,  SUM(vegetation_area) as total_vegetation_area
      FROM farm;
    `;

    const provinceDbFarmStats = await db`
      SELECT province, COUNT(*) as farm_count, SUM(area) as total_area
      FROM farm
      GROUP BY province;
    `;

    const provinceFarmStats: Array<ProvinceFarmStats> = [];
    provinceDbFarmStats.forEach(stats => {
      provinceFarmStats.push({
        province: stats.province,
        farmCount: stats.farm_count,
        totalArea: stats.total_area
      });
    });

    const cropDbFarmStats = await db`
      SELECT crop.name, COUNT(*) as farm_count, SUM(area)
      FROM farm
      JOIN farm_crop
        ON farm.id = farm_crop.farm_id
      JOIN crop
        ON crop.id = farm_crop.crop_id
      GROUP BY crop.name
    `;
    const cropFarmStats: Array<CropFarmStats> = [];
    cropDbFarmStats.forEach(stats => {
      cropFarmStats.push({
        crop: stats.name,
        farmCount: stats.farm_count
      });
    });

    return new Dashboard(
      farmStats[0].farm_count,
      farmStats[0].total_area,
      farmStats[0].total_crop_area,
      farmStats[0].total_vegetation_area,
      provinceFarmStats,
      cropFarmStats
    );
  }

}

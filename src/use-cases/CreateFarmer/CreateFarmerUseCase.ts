import { Farmer } from "../../entities/Farmer";
import { Farm } from "../../entities/Farm";
import { Crop } from "../../entities/Crop";
import { FarmerRepository } from "../../repositories/FarmerRepository";
import { FarmRepository } from "../../repositories/FarmRepository";
import { CropRepository } from "../../repositories/CropRepository";

interface CropDTO {
  name: string;
}

interface FarmDTO {
  city: string;
  province: string;
  area: number;
  cropArea: number;
  vegetationArea: number;
  crops: Array<CropDTO>;
}

interface CreateFarmerDTO {
  name: string;
  cpf: string;
  cnpj: string;
  farm: FarmDTO;
}

export class CreateFarmerUseCase {
  constructor(
    private farmerRepository: FarmerRepository,
    private farmRepository: FarmRepository,
    private cropRepository: CropRepository
  ) { }

  async execute(data: CreateFarmerDTO) {
    const { name, cpf, cnpj, farm } = data;

    const crops: Array<Crop> = [];

    farm.crops.forEach(crop => {
      crops.push(new Crop(crop.name));
    });

    const farmObj = new Farm(farm.city, farm.province, farm.area, farm.cropArea, farm.vegetationArea, crops);
    const farmer = new Farmer(name, farmObj, cpf, cnpj);

    await this.farmerRepository.create(farmer);
    await this.farmRepository.create(farmObj, farmer.id);
    for (const crop of crops) {
      await this.cropRepository.createFarmCrop(crop.name, farmObj.id);
    }
  }
}


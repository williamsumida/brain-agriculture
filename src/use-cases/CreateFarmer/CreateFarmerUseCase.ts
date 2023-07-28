import { Farmer } from "../../entities/Farmer";
import { Farm } from "../../entities/Farm";
import { Crop } from "../../entities/Crop";
import { FarmerRepository } from "../../repositories/FarmerRepository";
import { FarmRepository } from "../../repositories/FarmRepository";
import { CropRepository } from "../../repositories/CropRepository";
import { isCpfValid, isCnpjValid, isAreaValid } from "./validations";

import { InvalidCpfError } from "../../errors/InvalidCpfError";
import { InvalidCnpjError } from "../../errors/InvalidCnpjError";
import { InvalidAreaError } from "../../errors/InvalidAreaError";
import { MustIncludeDocumentError } from "../../errors/MustIncludeDocumentError";

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
  cpf: string | undefined;
  cnpj: string | undefined;
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

    const hasDocuments = isCpfValid(cpf) || isCnpjValid(cnpj);
    const invalidCpf = typeof cpf === "string" && !isCpfValid(cpf);
    const invalidCnpj = typeof cnpj === "string" && !isCnpjValid(cnpj);

    if (!hasDocuments) {
      throw new MustIncludeDocumentError();
    }

    if (invalidCpf) {
      throw new InvalidCpfError();
    }

    if (invalidCnpj) {
      throw new InvalidCnpjError();
    }

    if (!isAreaValid(farm.area, farm.cropArea, farm.vegetationArea)) {
      throw new InvalidAreaError();
    }

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


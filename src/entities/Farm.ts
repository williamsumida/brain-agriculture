import { v4 } from "uuid";
import { Crop } from "../entities/Crop";

export class Farm {
  public readonly id: string;

  public city: string;
  public province: string;
  public area: number;
  public cropArea: number;
  public vegetationArea: number;
  public crops: Crop[];

  constructor(
    city: string,
    province: string,
    area: number,
    cropArea: number,
    vegetationArea: number,
    crops: Crop[],
    id?: string,
  ) {

    this.city = city;
    this.province = province;
    this.area = area;
    this.cropArea = cropArea;
    this.vegetationArea = vegetationArea;
    this.crops = crops;


    if (!id) {
      this.id = v4();
    } else {
      this.id = id;
    }
  }
}

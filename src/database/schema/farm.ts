import { pgTable, text, numeric, timestamp } from 'drizzle-orm/pg-core';
import { crop } from "./crop";

export const farm = pgTable("farm", {
  id: text("id").primaryKey(),
  city: text("city"),
  province: text("province"),
  area: numeric("area"),
  cropArea: numeric("crop_area"),
  vegetationArea: numeric("vegetation_area"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

export const farmCrop = pgTable("farm_crop", {
  farmerId: text("crop_id").references(() => crop.id),
  farmId: text("farm_id").references(() => farm.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

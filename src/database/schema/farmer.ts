import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { farm } from "./farm";

export const farmer = pgTable("farmer", {
  id: text("id").primaryKey(),
  name: text("name"),
  cpf: text("cpf"),
  cnpj: text("cnpj"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

export const farmerFarm = pgTable("farmer_farm", {
  farmerId: text("farmer_id").references(() => farmer.id),
  farmId: text("farm_id").references(() => farm.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

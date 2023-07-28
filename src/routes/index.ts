import { FastifyInstance } from "fastify";
import { register } from "../use-cases/CreateFarmer/CreateFarmerController";
import { dashboard } from "../use-cases/Dashboard/DashboardController";

export async function routes(app: FastifyInstance) {
  app.get("/", () => {
    return "API Brain Agriculture";
  });

  app.post("/farmer", register);
  app.get("/dashboard", dashboard);
}

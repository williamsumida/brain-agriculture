import { FastifyInstance } from "fastify";
import { register } from "../use-cases/CreateFarmer/CreateFarmerController";

export async function routes(app: FastifyInstance) {
  app.get("/", () => {
    return "API Brain Agriculture";
  });

  app.post("/farmer", register);
}

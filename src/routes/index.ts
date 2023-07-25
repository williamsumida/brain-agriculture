import { FastifyInstance } from "fastify";

export async function routes(app: FastifyInstance) {
  app.get("/", () => {
    return "API Brain Agriculture";
  });
}

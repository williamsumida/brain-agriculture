import { FastifyRequest, FastifyReply } from "fastify";
import { PostgresDashboardRepository } from "../../repositories/implementations/PostgresDashboardRepository";
import { DashboardUseCase } from "./DashboardUseCase";

export async function dashboard(request: FastifyRequest, reply: FastifyReply) {
  try {
    const postgresDashboardRepository = new PostgresDashboardRepository();
    const dashboardUseCase = new DashboardUseCase(postgresDashboardRepository);
    const dashboard = await dashboardUseCase.execute();
    return reply.status(200).send({ dashboard });
  } catch (err) {
    return reply.status(500).send(err);
  }
}

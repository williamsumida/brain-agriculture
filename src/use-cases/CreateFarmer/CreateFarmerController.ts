import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

import { PostgresFarmerRepository } from "../../repositories/implementations/PostgresFarmerRepository";
import { PostgresFarmRepository } from "../../repositories/implementations/PostgresFarmRepository";
import { CreateFarmerUseCase } from "./CreateFarmerUseCase";

import { FarmerAlreadyExistsError } from "../../errors/FarmerAlreadyExistsError";

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    cpf: z.string(),
    cnpj: z.string(),
    farm: z.object({
      city: z.string(),
      province: z.string(),
      area: z.number(),
      cropArea: z.number(),
      vegetationArea: z.number(),
      crops: z.array(
        z.object({
          name: z.string()
        })
      )
    })
  });

  const { name, cpf, cnpj, farm } = registerBodySchema.parse(request.body);

  try {
    const postgresFarmerRepository = new PostgresFarmerRepository();
    const postgresFarmRepository = new PostgresFarmRepository();
    const postgresCropRepository = new PostgresCropRepository();

    const createFarmerUseCase = new CreateFarmerUseCase(postgresFarmerRepository, postgresFarmRepository);
    await createFarmerUseCase.execute({ name, cpf, cnpj, farm });
  } catch (err) {
    if (err instanceof FarmerAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }

    return reply.status(500).send();
  }

  return reply.status(201).send();
}

import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

import { PostgresFarmerRepository } from "../../repositories/implementations/PostgresFarmerRepository";
import { PostgresFarmRepository } from "../../repositories/implementations/PostgresFarmRepository";
import { PostgresCropRepository } from "../../repositories/implementations/PostgresCropRepository";
import { CreateFarmerUseCase } from "./CreateFarmerUseCase";

import { FarmerAlreadyExistsError } from "../../errors/FarmerAlreadyExistsError";
import { InvalidCpfError } from "../../errors/InvalidCpfError";
import { InvalidCnpjError } from "../../errors/InvalidCnpjError";
import { InvalidAreaError } from "../../errors/InvalidAreaError";
import { MustIncludeDocumentError } from "../../errors/MustIncludeDocumentError";

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    cpf: z.string().optional(),
    cnpj: z.string().optional(),
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

    const createFarmerUseCase = new CreateFarmerUseCase(postgresFarmerRepository, postgresFarmRepository, postgresCropRepository);
    await createFarmerUseCase.execute({ name, cpf, cnpj, farm });
  } catch (err) {
    if (err instanceof FarmerAlreadyExistsError) {
      return reply.status(409).send(err);
    }

    if (
      err instanceof InvalidCpfError ||
      err instanceof InvalidCnpjError ||
      err instanceof InvalidAreaError ||
      err instanceof MustIncludeDocumentError
    ) {
      return reply.status(400).send(err);
    }

    return reply.status(500).send(err);
  }

  return reply.status(201).send();
}

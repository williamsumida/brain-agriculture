import fastify from "fastify";
import { routes } from "./routes";

import cors from "@fastify/cors";
import helmet from "@fastify/helmet";

const app = fastify({ logger: true });
app.register(helmet);
app.register(cors);

app.register(routes);

export { app };

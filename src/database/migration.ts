import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { env } from "../env";

export const migrationsClient = postgres({
  host: env.DB_HOST,
  port: env.DB_PORT,
  database: env.DB_NAME,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  max: 1
});

const db = drizzle(migrationsClient, { logger: true });
migrate(db, { migrationsFolder: "./src/database/migrations" });


import postgres from 'postgres';
import { env } from "../env";

export const db = postgres({
  host: env.DB_HOST,
  port: env.DB_PORT,
  database: env.DB_NAME,
  username: env.DB_USER,
  password: env.DB_PASSWORD
});


console.info("Connected to the database");

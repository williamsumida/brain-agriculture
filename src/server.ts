import { env } from "./env";

//import "./database/migration";
//import "./database/postgres";

import { app } from "./app";


app.listen({
  host: "0.0.0.0",
  port: env.PORT
}).then(() => {
  app.log.info(`🚀 Brain Agriculture API Running on port ${env.PORT}!`);
});

import "express-async-errors";
import express from "express";

import { exceptionMiddleware } from "./middlewares/exceptions";
import { sessionMiddleware } from "./middlewares/session";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "@root/swagger.json";

import { routes as characterRoutes } from "@inf/routes/resources/character.routes";

export const server = express();

server.use(express.json());

server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

server.use(sessionMiddleware);

server.use(characterRoutes);

server.use(exceptionMiddleware);

export class Server {
  static connect(): void {
    const PORT = process.env["PORT"] || 8080;

    server.listen(PORT);
  }
}

import "express-async-errors";
import express from "express";

import { exceptionMiddleware } from "./middlewares/exceptions";
import { sessionMiddleware } from "./middlewares/session";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "@root/swagger.json";

import { routes as characterRoutes } from "@inf/routes/resources/character.routes";
import { routes as equipmentRoutes } from "@inf/routes/resources/equipment.routes";
import { routes as inventoryRoutes } from "@inf/routes/resources/inventory.routes";
import { routes as statusRoutes } from "@inf/routes/resources/status.routes";
import { routes as skillsRoutes } from "@inf/routes/resources/skills.routes";

export const server = express();

server.use(express.json());

server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

server.use(sessionMiddleware);

server.use(characterRoutes);
server.use(equipmentRoutes);
server.use(inventoryRoutes);
server.use(statusRoutes);
server.use(skillsRoutes);

server.use(exceptionMiddleware);

export class Server {
  static connect(): void {
    const PORT = process.env["PORT"] || 8080;

    server.listen(PORT);
  }
}

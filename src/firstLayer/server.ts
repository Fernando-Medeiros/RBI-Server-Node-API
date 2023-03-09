import "express-async-errors";
import express from "express";

import { exceptionMiddleware } from "./middlewares/exceptions";
import { sessionMiddleware } from "./middlewares/session";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "@root/swagger.json";

export const server = express();

server.use(express.json());

server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

server.use(sessionMiddleware);

server.use(exceptionMiddleware);

const PORT = process.env["PORT"] ?? 8080;

export const startServer = () => server.listen(PORT);

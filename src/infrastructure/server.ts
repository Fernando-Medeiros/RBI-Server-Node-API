import 'express-async-errors';
import express from 'express';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import swaggerFile from 'swagger.json';

import { ApiSecretMiddleware } from './middlewares/api-secret';
import { ExceptionMiddleware } from './middlewares/exceptions';
import { SessionMiddleware } from './middlewares/session';
import { RequestLimiterMiddleware } from './middlewares/request-rate-limit';

import { routes as characterRoutes } from 'infra/routes/resources/character.routes';
import { routes as equipmentRoutes } from 'infra/routes/resources/equipment.routes';
import { routes as inventoryRoutes } from 'infra/routes/resources/inventory.routes';
import { routes as statusRoutes } from 'infra/routes/resources/status.routes';
import { routes as skillsRoutes } from 'infra/routes/resources/skills.routes';

export const server = express();

server.use(express.json());

server.use(cors({ origin: process.env['CORS_ORIGIN'] }));

server.use(RequestLimiterMiddleware);

server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

server.use(ApiSecretMiddleware);

server.use(SessionMiddleware);

server.use(characterRoutes);
server.use(equipmentRoutes);
server.use(inventoryRoutes);
server.use(statusRoutes);
server.use(skillsRoutes);

server.use(ExceptionMiddleware);

export class Server {
    static connect(): void {
        const PORT = process.env['PORT'] || 8080;

        server.listen(PORT);
    }
}

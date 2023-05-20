import 'tsconfig-paths/register';
import request from 'supertest';
import { config } from 'dotenv';
import { env } from 'process';

// env["ENV"] = "test";
env['MONGODB_DATABASE'] = 'TEST';
config();

import { DatabasePrimary } from 'infra/services/database/database.connect';
import { server } from 'infra/server';
import { secretHeader as getSecret } from './headers/api-secret.header';

export const app = request(server);
export const secretHeader = {};

(async function () {
    await Promise.all([
        DatabasePrimary.connect(),

        Object.assign(secretHeader, await getSecret()),
    ]);
})();

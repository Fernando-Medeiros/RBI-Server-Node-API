import 'tsconfig-paths/register';
import { config } from 'dotenv';
config();

import { DatabasePrimary } from 'infra/services/database/database.connect';
import { Server } from 'infra/server';

async function main() {
    await DatabasePrimary.connect();
    Server.connect();
}

main();

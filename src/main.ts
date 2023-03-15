import "tsconfig-paths/register";
import { config } from "dotenv";
config();

import { DatabasePrimary } from "@inf/services/database/database.connect";
import { Server } from "@inf/server";

async function main() {
  await DatabasePrimary.connect();
  Server.connect();
}

main();

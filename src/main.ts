import "tsconfig-paths/register";

import { config } from "dotenv";
config();

import { connectToDatabase } from "@inf/services/database/database.connect";
import { startServer } from "@inf/server";

connectToDatabase();
startServer();

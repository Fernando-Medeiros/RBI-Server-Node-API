import "tsconfig-paths/register";

import { config } from "dotenv";
import { connectToDatabase } from "@inf/services/database/database.connect";
import { startServer } from "@inf/server";

config();
connectToDatabase();
startServer();

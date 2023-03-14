import "tsconfig-paths/register";
import request from "supertest";
import { config } from "dotenv";
import { env } from "process";

env["ENV"] = "test";
env["MONGO_COLLECTION"] = "TEST";
config();

import { connectToDatabase } from "@inf/services/database/database.connect";
import { server } from "@inf/server";

connectToDatabase();

export const app = request(server);

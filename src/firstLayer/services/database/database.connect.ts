import { env } from "process";
import { set, connect } from "mongoose";

set("strictQuery", false);

export const getURI = (): string => {
  const username = env["MONGO_USERNAME"] || "";
  const password = env["MONGO_PASSWORD"] || "";
  const host = env["MONGO_HOST"] || "";
  const collection =
    env["ENV"] === "dev" ? "DEVELOPMENT" : env["MONGO_COLLECTION"];

  return `mongodb+srv://${username}:${password}.${host}/${collection}?retryWrites=true&w=majority`;
};

export const connectToDatabase = async () => {
  const uri: string = getURI();

  await connect(uri)
    .then(() => console.log(`Connected to the database -> ${env["ENV"]}`))
    .catch(() => new Error(`Error connecting to the database!`));
};

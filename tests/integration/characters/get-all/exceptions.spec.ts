import { describe, expect, it } from "vitest";
import { app, secretHeader } from "@tes/config/config";

const headers = { ...secretHeader, ...{ Authorization: "Bearer 000000" } };

describe("Character - Get All - Exceptions", () => {
  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app.get("/characters").set(headers);

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });
});

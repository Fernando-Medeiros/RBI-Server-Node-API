import { describe, expect, it } from "vitest";

import { app } from "@tes/config/config";

describe("Character - Get All - Exceptions", () => {
  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .get("/characters")
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toBeTypeOf("object");
  });
});

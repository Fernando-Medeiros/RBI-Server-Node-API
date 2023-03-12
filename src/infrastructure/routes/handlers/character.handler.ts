import type { Request } from "express";

import { CharacterRepository } from "@inf/repositories/character/character.repository.impl";
import { CharacterRequest } from "@app/useCases/characterCases/requests/character.requests";

import { createCase } from "@app/useCases/characterCases/createCase";
import { deleteCase } from "@app/useCases/characterCases/deleteCase";
import { getAllCase } from "@app/useCases/characterCases/getAllCase";
import { getByIdCase } from "@app/useCases/characterCases/getByIdCase";
import { getByNameCase } from "@app/useCases/characterCases/getByNameCase";
import { updateCase } from "@app/useCases/characterCases/updateCase";

export const characterHandler = {
  async getAllCharacters() {
    return await getAllCase(new CharacterRepository());
  },

  async getCharacterById(req: Request) {
    return await getByIdCase(
      req,
      new CharacterRequest(),
      new CharacterRepository()
    );
  },

  async getCharacterByName(req: Request) {
    return await getByNameCase(
      req,
      new CharacterRequest(),
      new CharacterRepository()
    );
  },

  async createCharacter(req: Request) {
    return await createCase(
      req,
      new CharacterRequest(),
      new CharacterRepository()
    );
  },

  async deleteCharacter(req: Request) {
    return await deleteCase(req, new CharacterRepository());
  },

  async updateCharacter(req: Request) {
    return await updateCase(
      req,
      new CharacterRequest(),
      new CharacterRepository()
    );
  },
};

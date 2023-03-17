import type { Request } from "express";

import { CharacterRepository } from "@inf/repositories/character.repository.impl";
import { CharacterRequestsToCreate } from "@app/useCases/characterCases/requests/create.requests";
import { CharacterRequestsToDelete } from "@app/useCases/characterCases/requests/delete.requests";
import { CharacterRequestsToUpdate } from "@app/useCases/characterCases/requests/update.requests";
import { CharacterRequestsToFindById } from "@app/useCases/characterCases/requests/findById.requests";
import { CharacterRequestsToFindByName } from "@app/useCases/characterCases/requests/findByName.requests";

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
    const { id } = req.params;

    return await getByIdCase(
      new CharacterRequestsToFindById(id as string),
      new CharacterRepository()
    );
  },

  async getCharacterByName(req: Request) {
    const { name } = req.params;

    return await getByNameCase(
      new CharacterRequestsToFindByName(name),
      new CharacterRepository()
    );
  },

  async createCharacter(req: Request) {
    const { sub } = req.headers;
    const { charName, className } = req.body;

    return await createCase(
      new CharacterRequestsToCreate(sub as string, charName, className),
      new CharacterRepository()
    );
  },

  async deleteCharacter(req: Request) {
    const { sub } = req.headers;

    return await deleteCase(
      new CharacterRequestsToDelete(sub as string),
      new CharacterRepository()
    );
  },

  async updateCharacter(req: Request) {
    const { sub } = req.headers;
    const { charName, className, level } = req.body;

    return await updateCase(
      new CharacterRequestsToUpdate(sub as string, charName, className, level),
      new CharacterRepository()
    );
  },
};

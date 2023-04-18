import type { Request } from "express";

import { CharacterRepository } from "infra/repositories/character.repository.impl";
import { CharacterRequestsToCreate } from "app/use-cases/character-cases/requests/create.requests";
import { CharacterRequestsToDelete } from "app/use-cases/character-cases/requests/delete.requests";
import { CharacterRequestsToUpdate } from "app/use-cases/character-cases/requests/update.requests";
import { CharacterRequestsToGetById } from "app/use-cases/character-cases/requests/get-by-id.requests";
import { CharacterRequestsToGetByName } from "app/use-cases/character-cases/requests/get-by-name.requests";

import { createCase } from "app/use-cases/character-cases/create.case";
import { deleteCase } from "app/use-cases/character-cases/delete.case";
import { getAllCase } from "app/use-cases/character-cases/get-all.case";
import { getByIdCase } from "app/use-cases/character-cases/get-by-id.case";
import { getByNameCase } from "app/use-cases/character-cases/get-by-name.case";
import { updateCase } from "app/use-cases/character-cases/update.case";

export const CharacterHandler = {
  async getAllCharacters() {
    return await getAllCase(new CharacterRepository());
  },

  async getCharacterById(req: Request) {
    const { id } = req.params;

    return await getByIdCase(
      new CharacterRequestsToGetById(id as string),
      new CharacterRepository()
    );
  },

  async getCharacterByName(req: Request) {
    const { name } = req.params;

    return await getByNameCase(
      new CharacterRequestsToGetByName(name),
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

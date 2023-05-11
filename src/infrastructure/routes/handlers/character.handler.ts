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

export class CharacterHandler {
  readonly Repository = new CharacterRepository();

  async getAllCharacters() {
    return await getAllCase(this.Repository);
  }

  async getCharacterById(req: Request) {
    return await getByIdCase(
      new CharacterRequestsToGetById({ ...req.params }),
      this.Repository
    );
  }

  async getCharacterByName(req: Request) {
    return await getByNameCase(
      new CharacterRequestsToGetByName({ ...req.params }),
      this.Repository
    );
  }

  async createCharacter(req: Request) {
    return await createCase(
      new CharacterRequestsToCreate({ ...req.headers, ...req.body }),
      this.Repository
    );
  }

  async deleteCharacter(req: Request) {
    return await deleteCase(
      new CharacterRequestsToDelete({ ...req.headers }),
      this.Repository
    );
  }

  async updateCharacter(req: Request) {
    return await updateCase(
      new CharacterRequestsToUpdate({
        ...req.headers,
        ...req.body,
      }),
      this.Repository
    );
  }
}

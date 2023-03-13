import type {
  CharacterCreateProps,
  CharacterUpdateProps,
} from "./character.props";

export interface ICharacterRequestsToCreate {
  getRequestToCreate(): [sub: string, toCreate: CharacterCreateProps];
}

export interface ICharacterRequestsToUpdate {
  getRequestToUpdate(): [sub: string, toUpdate: CharacterUpdateProps];
}

export interface ICharacterRequestsToDelete {
  getRequestToDelete(): { sub: string };
}

export interface ICharacterRequestsToFindByName {
  getRequestToFindByName(): { name: string };
}

export interface ICharacterRequestsToFindById {
  getRequestToFindById(): { id: string };
}

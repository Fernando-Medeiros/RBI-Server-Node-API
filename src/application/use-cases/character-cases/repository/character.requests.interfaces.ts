import type {
    CharacterCreateProps,
    CharacterUpdateProps,
} from './character.props';

export interface ICharacterRequestsToCreate {
    getRequestToCreate(): { sub: string; toCreate: CharacterCreateProps };
}

export interface ICharacterRequestsToUpdate {
    getRequestToUpdate(): { sub: string; toUpdate: CharacterUpdateProps };
}

export interface ICharacterRequestsToDelete {
    getRequestToDelete(): { sub: string };
}

export interface ICharacterRequestsToGetByName {
    getRequestToGetByName(): { name: string };
}

export interface ICharacterRequestsToGetById {
    getRequestToGetById(): { id: string };
}

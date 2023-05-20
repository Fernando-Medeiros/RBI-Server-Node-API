import type { ICharacterRepository } from './repository/character.repository.interfaces';

export const getAllCase = async (repository: ICharacterRepository) => {
    const characters = await repository.find();
    const toResponse = [];

    for (const char of characters) {
        const { pubId, level, charName, className, gender } = char;

        toResponse.push({ pubId, level, charName, className, gender });
    }

    return toResponse;
};

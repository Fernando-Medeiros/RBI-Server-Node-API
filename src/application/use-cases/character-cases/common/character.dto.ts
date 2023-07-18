import type { Character } from 'domain/entities/character.entity';

export type CharacterDto = Character;

export type CreateCharacterDto = Pick<CharacterDto, 'charName' | 'className'> &
    Partial<Pick<CharacterDto, 'pubId'>>;

export type UpdateCharacterDto = Partial<
    Pick<CharacterDto, 'level' | 'charName' | 'className' | 'gender'>
>;

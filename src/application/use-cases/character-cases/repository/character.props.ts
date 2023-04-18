import type { PCharacter } from "domain/entities/character/character.interface";

export type CharacterProps = PCharacter;

export type CharacterCreateProps = {
  pubId?: string;
  charName: string;
  className: string;
};

export type CharacterUpdateProps = {
  level?: number;
  charName?: string;
  className?: string;
  gender?: string;
};

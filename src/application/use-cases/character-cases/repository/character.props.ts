import type { Character } from "domain/entities/character.entity";

export type CharacterProps = Character;

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

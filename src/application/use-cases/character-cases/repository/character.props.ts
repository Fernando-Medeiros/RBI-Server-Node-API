import type { PCharacter } from "@dom/entities/character/character.interface";

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
};
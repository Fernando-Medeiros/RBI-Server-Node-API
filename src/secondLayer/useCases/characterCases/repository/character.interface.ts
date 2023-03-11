import type { PCharacter } from "@dom/entities/character/character.interface";

export interface ICharacterRepository {
  find(): Promise<PropsCharacter[]>;
  findById(id: string): Promise<PropsCharacter | null>;
  findByName(name: string): Promise<PropsCharacter | null>;
  findByIdAndUpdate(id: string, data: PCharacterUpdate): Promise<PropsCharacter | null>;
  findByIdAndDelete(id: string): Promise<PropsCharacter | null>;
  save(data: PCharacterCreate): Promise<void>;
}

export interface ICharacterRequests {
  getRequestToCreate(req: unknown): PCharacterCreate;
  getRequestToUpdate(req: unknown): PCharacterUpdate;
  getRequestToFindByName(req: unknown): { name: string };
  getRequestToFindById(req: unknown): { id: string };
}

export type PropsCharacter = PCharacter;

export type PCharacterCreate = {
  pubId?: string;
  charName: string;
  className: string;
};

export type PCharacterUpdate = {
  level?: number;
  charName?: string;
  className?: string;
};

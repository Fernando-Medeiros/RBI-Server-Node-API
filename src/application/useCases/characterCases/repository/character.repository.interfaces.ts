import type {
  CharacterCreateProps,
  CharacterUpdateProps,
  CharacterProps,
} from "./character.props";

export interface ICharacterRepository {
  find(): Promise<CharacterProps[]>;
  findById(id: string): Promise<CharacterProps | null>;
  findByName(name: string): Promise<CharacterProps | null>;
  findByIdAndDelete(id: string): Promise<CharacterProps | null>;
  findByIdAndUpdate(
    id: string,
    data: CharacterUpdateProps
  ): Promise<CharacterProps | null>;
  save(data: CharacterCreateProps): Promise<void>;
}

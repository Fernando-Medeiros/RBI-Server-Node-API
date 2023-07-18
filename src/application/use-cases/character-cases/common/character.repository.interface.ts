import type {
    IRepository,
    IRepositoryExtension,
} from 'core/repository.interface';
import type {
    CreateCharacterDto,
    CharacterDto,
    UpdateCharacterDto,
} from './character.dto';

export type ICharacterRepository = IRepository<
    CharacterDto,
    UpdateCharacterDto,
    CreateCharacterDto
> &
    IRepositoryExtension<CharacterDto>;

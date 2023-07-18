import { describe, it, expect } from 'vitest';
import { InMemorySkillsRepository } from './mock/inMemorySkillsRepository';
import { SkillsRequests } from 'infra/routes/requests/skills.request.impl';
import { createCase } from 'app/use-cases/skills-cases/create.case';

const repository = new InMemorySkillsRepository();
const { id } = repository.helpers.pubId();

describe('Create-> Skills-OK', () => {
    it('Should create the Skills', async () => {
        const res = await createCase(new SkillsRequests({ id }), repository);

        expect(res).toBeUndefined();
    });
});

describe('Create-> Skills-Exceptions', () => {
    it('Should return error when trying to duplicate a Skills in use', async () => {
        await expect(() =>
            createCase(new SkillsRequests({ id }), repository),
        ).rejects.toThrowError('one Skills allowed per character');
    });
});

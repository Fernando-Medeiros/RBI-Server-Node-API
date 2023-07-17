import { describe, it, expect } from 'vitest';
import { InMemorySkillsRepository } from './mock/inMemorySkillsRepository';
import { SkillsRequests } from 'infra/routes/requests/skills.request.impl';
import { deleteCase } from 'app/use-cases/skills-cases/delete.case';

const repository = new InMemorySkillsRepository();
const { id } = repository.helpers.pubId();

describe('Delete-> Skills-OK', () => {
    repository.helpers.insertOneToDatabase();

    it('Should delete the Skills', async () => {
        const res = await deleteCase(new SkillsRequests({ id }), repository);

        expect(res).toBeUndefined();
    });
});

describe('Delete-> Skills-Exceptions', () => {
    it('Should return [not found] when informing an id that does not exist in the database', async () => {
        await expect(() =>
            deleteCase(new SkillsRequests({ id }), repository),
        ).rejects.toThrowError('not found');
    });
});

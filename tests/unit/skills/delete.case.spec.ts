import { describe, it, expect } from 'vitest';
import { InMemorySkillsRepository } from './mock/in-memory.skills.repository';
import { SkillsRequests } from 'infra/routes/requests/skills.request.impl';
import { deleteCase } from 'app/use-cases/skills-cases/delete.case';
import { NotFound } from 'utils/http.exceptions';

const repository = new InMemorySkillsRepository();

const { pubId: id } = repository.getDataMock();

repository.save(repository.getDataMock());

describe('Delete-> Skills-OK', () => {
    it('Should delete the Skills', async () => {
        const res = await deleteCase(new SkillsRequests({ id }), repository);

        expect(res).toBeUndefined();
    });
});

describe('Delete-> Skills-Exceptions', () => {
    it('Should return [NotFound] when informing an id that does not exist in the database', async () => {
        await expect(() =>
            deleteCase(new SkillsRequests({ id }), repository),
        ).rejects.toThrowError(NotFound);
    });
});

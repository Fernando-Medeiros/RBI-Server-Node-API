import { describe, it, expect } from 'vitest';
import { InMemorySkillsRepository } from './mock/in-memory.skills.repository';
import { SkillsRequests } from 'infra/routes/requests/skills.request.impl';
import { getByIdCase } from 'app/use-cases/skills-cases/get-by-id.case';
import { BadRequest, NotFound } from 'utils/http.exceptions';

const repository = new InMemorySkillsRepository();

const { pubId: id } = repository.getDataMock();

repository.save(repository.getDataMock());

describe('Get-By-Id-> Skills-OK', () => {
    it('Should get a Skills by id', async () => {
        const res = await getByIdCase(new SkillsRequests({ id }), repository);

        expect(res).toContain({ pubId: id });
    });
});

describe('Get-By-Id-> Skills-Exceptions', () => {
    it('Should return [BadRequest] when passing an invalid id', async () => {
        await expect(() =>
            getByIdCase(new SkillsRequests({ id: '000-000' }), repository),
        ).rejects.toThrowError(BadRequest);
    });

    it('Should return [BadRequest] when passing an null id', async () => {
        await expect(() =>
            getByIdCase(new SkillsRequests({ id: '' }), repository),
        ).rejects.toThrowError(BadRequest);
    });

    it('Should return [NotFound] when entering a valid but non-existent id', async () => {
        await expect(() =>
            getByIdCase(
                new SkillsRequests({
                    id: 'b2cd80d6-825d-4b67-a7a5-3cface4f19b9',
                }),
                repository,
            ),
        ).rejects.toThrowError(NotFound);
    });
});

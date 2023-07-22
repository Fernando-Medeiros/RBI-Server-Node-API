import { describe, it, expect } from 'vitest';
import { InMemorySkillsRepository } from './mock/in-memory.skills.repository';
import { SkillsRequests } from 'infra/routes/requests/skills.request.impl';
import { createCase } from 'app/use-cases/skills-cases/create.case';
import { BadRequest } from 'utils/http.exceptions';

const repository = new InMemorySkillsRepository();

const { pubId: id } = repository.getDataMock();

describe('Create-> Skills-OK', () => {
    it('Should create the Skills', async () => {
        const res = await createCase(new SkillsRequests({ id }), repository);

        expect(res).toBeUndefined();
    });
});

describe('Create-> Skills-Exceptions', () => {
    it('Should return [BadRequest] when trying to duplicate a Skills in use', async () => {
        await expect(() =>
            createCase(new SkillsRequests({ id }), repository),
        ).rejects.toThrowError(BadRequest);
    });
});

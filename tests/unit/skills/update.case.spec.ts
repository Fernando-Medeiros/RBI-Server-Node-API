import { describe, it, expect } from 'vitest';
import { InMemorySkillsRepository } from './mock/in-memory.skills.repository';
import { SkillsRequests } from 'infra/routes/requests/skills.request.impl';
import { updateCase } from 'app/use-cases/skills-cases/update.case';
import { BadRequest } from 'utils/http.exceptions';

const repository = new InMemorySkillsRepository();

const { pubId: id, ...data } = repository.getDataMock();

const [offensiveSkill, defensiveSkill] = [
    repository.getFakeOffensiveSkill(),
    repository.getFakeDefensiveSkill(),
];

repository.save(repository.getDataMock());

describe('Update-> Skills-OK', () => {
    it('Should update all Skills', async () => {
        const res = await updateCase(
            new SkillsRequests({ id, ...data }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update one offensive skill', async () => {
        const res = await updateCase(
            new SkillsRequests({ id, offensive: [offensiveSkill] }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update two offensive skills', async () => {
        const res = await updateCase(
            new SkillsRequests({
                id,
                offensive: [offensiveSkill, offensiveSkill],
            }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update one defensive skill', async () => {
        const res = await updateCase(
            new SkillsRequests({ id, defensive: [defensiveSkill] }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update tow defensive skills', async () => {
        const res = await updateCase(
            new SkillsRequests({
                id,
                defensive: [defensiveSkill, defensiveSkill],
            }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update two offensive and defensive skills', async () => {
        const [offensive, defensive] = [
            [offensiveSkill, offensiveSkill],
            [defensiveSkill, defensiveSkill],
        ];

        const res = await updateCase(
            new SkillsRequests({ id, offensive, defensive }),
            repository,
        );
        expect(res).toBeUndefined();
    });
});

describe('Update-> Skills-Exceptions', () => {
    it('Should return [BadRequest] when passing an empty object', async () => {
        await expect(() =>
            updateCase(new SkillsRequests({ id }), repository),
        ).rejects.toThrowError(BadRequest);
    });

    it('Should return [BadRequest] when sending invalid offensive skill', async () => {
        const offensive = [
            Object({
                name: 'missing fields',
                invalidField0: 2,
                invalidField1: true,
                invalidField2: '...',
            }),
        ];

        await expect(() =>
            updateCase(new SkillsRequests({ id, offensive }), repository),
        ).rejects.toThrowError(BadRequest);
    });

    it('Should return [BadRequest] when sending invalid defensive skill', async () => {
        const defensive = [
            Object({
                name: 'missing fields',
                invalidField0: 2,
                invalidField1: true,
                invalidField2: '...',
            }),
        ];

        await expect(() =>
            updateCase(new SkillsRequests({ id, defensive }), repository),
        ).rejects.toThrowError(BadRequest);
    });

    it('Should return [BadRequest] when sending offensive and defensive skill without content', async () => {
        await expect(() =>
            updateCase(new SkillsRequests({ id }), repository),
        ).rejects.toThrowError(BadRequest);
    });
});

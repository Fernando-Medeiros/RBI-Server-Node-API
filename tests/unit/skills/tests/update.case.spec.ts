import { describe, it, expect } from 'vitest';
import { InMemorySkillsRepository } from './mock/inMemorySkillsRepository';
import { SkillsRequests } from 'infra/routes/requests/skills.request.impl';
import { updateCase } from 'app/use-cases/skills-cases/update.case';

const repository = new InMemorySkillsRepository();
const { id } = repository.helpers.pubId();

describe('Update-> Skills-OK', () => {
    repository.helpers.insertOneToDatabase();

    const data = repository.helpers.getDataMock();

    it('Should update all Skills', async () => {
        const res = await updateCase(
            new SkillsRequests({ id, ...data }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update one offensive skill', async () => {
        const offensive = [repository.helpers.getFakeOffensive()];

        const res = await updateCase(
            new SkillsRequests({ id, offensive }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update two offensive skills', async () => {
        const offensive = [
            repository.helpers.getFakeOffensive(),
            repository.helpers.getFakeOffensive(),
        ];

        const res = await updateCase(
            new SkillsRequests({ id, offensive }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update one defensive skill', async () => {
        const defensive = [repository.helpers.getFakeDefensive()];

        const res = await updateCase(
            new SkillsRequests({ id, defensive }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update tow defensive skills', async () => {
        const defensive = [
            repository.helpers.getFakeDefensive(),
            repository.helpers.getFakeDefensive(),
        ];

        const res = await updateCase(
            new SkillsRequests({ id, defensive }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update tow offensive and defensive skills', async () => {
        const [offensive, defensive] = [
            [
                repository.helpers.getFakeOffensive(),
                repository.helpers.getFakeOffensive(),
            ],
            [
                repository.helpers.getFakeDefensive(),
                repository.helpers.getFakeDefensive(),
            ],
        ];

        const res = await updateCase(
            new SkillsRequests({ id, offensive, defensive }),
            repository,
        );
        expect(res).toBeUndefined();
    });
});

describe('Update-> Skills-Exceptions', () => {
    it('Should return [no data] when passing an empty object', async () => {
        await expect(() =>
            updateCase(new SkillsRequests({ id }), repository),
        ).rejects.toThrowError('No data');
    });

    it('Should return an error when sending invalid offensive skill', async () => {
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
        ).rejects.toThrowError('Missing fields');
    });

    it('Should return an error when sending invalid defensive skill', async () => {
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
        ).rejects.toThrowError('Missing fields');
    });

    it('Should return an error when sending offensive and defensive skill without content', async () => {
        await expect(() =>
            updateCase(new SkillsRequests({ id }), repository),
        ).rejects.toThrowError('No data');
    });
});

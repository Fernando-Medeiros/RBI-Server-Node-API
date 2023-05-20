import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { app, secretHeader } from 'tests/config/config';
import { EquipmentMock } from '../mock/equipment.mock';
import { HelperHeaders } from 'tests/config/helpers/get-auth-header';
import { Helpers } from 'tests/config/helpers/insert-remove';

import accessoryExample from 'example/items/accessory.example.json';
import armorExample from 'example/items/armor.example.json';
import weaponExample from 'example/items/weapon.example.json';

const mock = new EquipmentMock();
const headers = { ...secretHeader, Authorization: '' };

describe('Equipment - Update - Success', async () => {
    beforeAll(async () => {
        Object.assign(
            headers,
            await HelperHeaders.mockAuthorizationHeader(mock.pubId),
        );
        await Helpers.insertBeforeAll(
            '/equipments',
            mock.dataToCreate,
            headers,
        );
    });
    afterAll(async () => {
        await Helpers.removeAfterAll('/equipments', headers);
    });

    it('Should update the all equipments', async () => {
        const toUpdate = {
            head: armorExample,
            body: armorExample,
            leg: armorExample,
            handLeft: weaponExample,
            handRight: weaponExample,
            accessoryLeft: accessoryExample,
            accessoryRight: accessoryExample,
        };

        const res = await app.patch('/equipments').send(toUpdate).set(headers);

        expect(res.statusCode).toEqual(204);
    });

    it('Should update the head', async () => {
        const toUpdate = { head: armorExample };

        const res = await app.patch('/equipments').send(toUpdate).set(headers);

        expect(res.statusCode).toEqual(204);
    });

    it('Should update the body', async () => {
        const toUpdate = { body: armorExample };

        const res = await app.patch('/equipments').send(toUpdate).set(headers);

        expect(res.statusCode).toEqual(204);
    });

    it('Should update the leg', async () => {
        const toUpdate = { leg: armorExample };

        const res = await app.patch('/equipments').send(toUpdate).set(headers);

        expect(res.statusCode).toEqual(204);
    });

    it('Should update the handLeft', async () => {
        const toUpdate = { handLeft: weaponExample };

        const res = await app.patch('/equipments').send(toUpdate).set(headers);

        expect(res.statusCode).toEqual(204);
    });

    it('Should update the handRight', async () => {
        const toUpdate = { handRight: weaponExample };

        const res = await app.patch('/equipments').send(toUpdate).set(headers);

        expect(res.statusCode).toEqual(204);
    });

    it('Should update the accessoryLeft', async () => {
        const toUpdate = { accessoryLeft: accessoryExample };

        const res = await app.patch('/equipments').send(toUpdate).set(headers);

        expect(res.statusCode).toEqual(204);
    });

    it('Should update the accessoryRight', async () => {
        const toUpdate = { accessoryRight: accessoryExample };

        const res = await app.patch('/equipments').send(toUpdate).set(headers);

        expect(res.statusCode).toEqual(204);
    });
});

import type { AuthorizationSchema } from '../headers/authorization.header';
import { app, secretHeader } from 'tests/config/config';

export class Helpers {
    static insertBeforeAll = async (
        path: string,
        data: object,
        header: AuthorizationSchema,
    ) => {
        await app
            .post(path)
            .set({ ...secretHeader, ...header })
            .send(data);
    };

    static removeAfterAll = async (
        path: string,
        header: AuthorizationSchema,
    ) => {
        await app
            .delete(path)
            .set({ ...secretHeader, ...header })
            .send({});
    };
}

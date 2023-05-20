import { REDIS } from './cache.connect';

export class CacheHandler {
    static async get(key: string): Promise<string | null> {
        return await REDIS().get(key);
    }

    static async set(key: string, value: string): Promise<void> {
        await REDIS().set(key, value);
    }
}

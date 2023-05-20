import type { Defensive, Offensive } from 'domain/skills/skills.interface';

export class Skills {
    constructor(
        readonly pubId: string,
        readonly offensive: Offensive[],
        readonly defensive: Defensive[],
        readonly _id?: string,
    ) {}
}

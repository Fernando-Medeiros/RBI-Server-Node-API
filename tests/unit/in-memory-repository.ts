import type { IRepository } from 'core/repository.interface';

export abstract class MemoryRepository<Dto, Update, Create = object>
    implements IRepository<Dto, Update, Create>
{
    private Database: Dto[] = [];

    async findById(id: string): Promise<Dto | null> {
        return this.Database.find(e => Object(e).pubId === id) || null;
    }

    async findByIdAndDelete(id: string): Promise<Dto | null> {
        const result =
            this.Database.filter(e => Object(e).pubId === id)[0] || null;

        result &&
            (this.Database = this.Database.filter(
                e => Object(e).pubId != Object(result).pubId,
            ));
        return result;
    }

    async findByIdAndUpdate(id: string, data: Update): Promise<Dto | null> {
        const result =
            this.Database.filter(e => Object(e).pubId === id)[0] || null;

        if (result) {
            this.Database = this.Database.filter(
                e => Object(e).pubId != Object(result).pubId,
            );
            this.Database.push(Object.assign({}, result, data));
        }
        return result;
    }

    async save(data: Create | Dto) {
        this.Database.push(Object(data));
    }

    abstract getDataMock(): Dto;
}

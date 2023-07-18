export interface IRepository<Dto, Update, Create = object> {
    findById(id: string): Promise<Dto | null>;

    findByIdAndDelete(id: string): Promise<Dto | null>;

    findByIdAndUpdate(id: string, data: Update): Promise<Dto | null>;

    save(data: Create | Dto): Promise<void>;
}

export interface IRepositoryExtension<Dto> {
    find<T = Dto>(query: Partial<Dto | T>): Promise<Dto | null>;
}

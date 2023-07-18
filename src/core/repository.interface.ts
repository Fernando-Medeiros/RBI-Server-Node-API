export interface IRepository<Dto, Update> {
    findById(id: string): Promise<Dto | null>;

    findByIdAndDelete(id: string): Promise<Dto | null>;

    findByIdAndUpdate(id: string, data: Update): Promise<Dto | null>;

    save(data: Dto): Promise<void>;
}

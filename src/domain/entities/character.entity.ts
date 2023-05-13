export class Character {
  constructor(
    readonly pubId: string,
    readonly level: number,
    readonly charName: string,
    readonly className: string,
    readonly gender: string,
    readonly _id?: string,
    readonly createdAt?: object
  ) {}
}

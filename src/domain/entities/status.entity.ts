export class Status {
  constructor(
    readonly pubId: string,
    readonly points: number,
    readonly experience: number,
    readonly strength: number,
    readonly intelligence: number,
    readonly dexterity: number,
    readonly vitality: number,
    readonly health: number,
    readonly energy: number,
    readonly currentHealth: number,
    readonly currentEnergy: number,
    readonly _id?: string
  ) {}
}

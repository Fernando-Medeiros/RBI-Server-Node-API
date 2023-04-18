import type { PropsSkills } from "domain/entities/skills/skills.interface";

export type SkillsProps = PropsSkills;

export type SkillsUpdateProps = Partial<Omit<PropsSkills, "_id" | "pubId">>;

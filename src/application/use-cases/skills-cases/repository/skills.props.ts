import type { PropsSkills } from "@dom/entities/skills/skills.interface";

export type SkillsProps = PropsSkills;

export type SkillsUpdateProps = Partial<Omit<PropsSkills, "_id" | "pubId">>;

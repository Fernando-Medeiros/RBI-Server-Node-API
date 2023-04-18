import { BadRequest } from "utils/http.exceptions";

function clearInvalidSkills(skills: [] | object[]) {
  const packageSkills: object[] = [];

  for (const skill of skills) {
    if (Object.values(skill).length >= 4) {
      if (packageSkills.includes(skill) === false) {
        packageSkills.push(skill);
      }
    }
  }
  return packageSkills;
}

function testFields(skills: [] | object[], fields: string[]) {
  const packageSkills = clearInvalidSkills(skills);

  for (const skill of packageSkills) {
    const skillFields = Object.keys(skill);

    if (skillFields.toString() != fields.toString()) {
      throw new BadRequest(`Missing fields: ${fields}`);
    }
  }
  return packageSkills;
}

export class SkillsValidators {
  static offensive(skills: [] | object[]) {
    const fields = ["name", "type", "attack", "magic", "description"];

    return testFields(skills, fields);
  }
  static defensive(skills: [] | object[]) {
    const fields = ["name", "type", "defense", "resistance", "description"];

    return testFields(skills, fields);
  }
}

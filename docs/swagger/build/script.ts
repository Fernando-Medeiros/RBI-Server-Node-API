import "tsconfig-paths/register";

import type { SwaggerInterface, Swagger } from "./interface";
import * as fs from "fs";

import swaggerFile from "@root/swagger.json";

import information from "../config/info.json";

import authentication from "../config/authentication.json";
import exceptions from "../config/exceptions.json";

import characterPaths from "../resources/character/paths.json";
import characterReq from "../resources/character/requests.json";
import characterRes from "../resources/character/responses.json";

class BuildSwagger implements SwaggerInterface {
  public file = swaggerFile as Swagger;

  insertInfo(i: object[]): void {
    const infos = Object.assign({}, ...i);

    this.file.info = infos;
  }

  insertSecurity(a: object[]): void {
    const authentications = Object.assign({}, ...a);

    this.file.components.securitySchemes = authentications;
  }

  insertComponents(c: object[]): void {
    const components = Object.assign({}, ...c);

    this.file.components.schemas = components;
  }

  insertPaths(p: object[]): void {
    const paths = Object.assign({}, ...p);

    this.file.paths = paths;
  }

  save(): void {
    const toSave = JSON.stringify(this.file);

    fs.writeFileSync("./swagger.json", toSave);
  }
}

const build = new BuildSwagger();

build.insertInfo([information]);

build.insertSecurity([authentication]);

build.insertComponents([exceptions, characterReq, characterRes]);

build.insertPaths([characterPaths]);

build.save();

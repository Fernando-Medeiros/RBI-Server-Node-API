import "tsconfig-paths/register";

import type { SwaggerInterface, Swagger } from "./interface";
import * as fs from "fs";

import swaggerJson from "@root/swagger.json";

import information from "../config/info.json";

import authentication from "../config/authentication.json";
import exceptions from "../config/exceptions.json";

import characterPath from "../resources/character/paths.json";
import characterReq from "../resources/character/requests.json";
import characterRes from "../resources/character/responses.json";

class BuildSwagger implements SwaggerInterface {
  public file = swaggerJson as Swagger;

  info(i: object[]): void {
    const infos = Object.assign({}, ...i);

    this.file.info = infos;
  }

  security(a: object[]): void {
    const authentications = Object.assign({}, ...a);

    this.file.components.securitySchemes = authentications;
  }

  components(c: object[]): void {
    const components = Object.assign({}, ...c);

    this.file.components.schemas = components;
  }

  paths(p: object[]): void {
    const paths = Object.assign({}, ...p);

    this.file.paths = paths;
  }

  save(): void {
    const toSave = JSON.stringify(this.file);

    fs.writeFileSync("./swagger.json", toSave);
  }
}

const build = new BuildSwagger();

build.info([information]);

build.security([authentication]);

build.components([exceptions, characterReq, characterRes]);

build.paths([characterPath]);

build.save();

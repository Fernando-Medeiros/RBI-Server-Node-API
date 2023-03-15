import "tsconfig-paths/register";
import { BuildSwagger } from "docs/swagger/build/build.impl";

import information from "docs/swagger/config/info.json";

import authentication from "docs/swagger/config/authentication.json";
import exceptions from "docs/swagger/config/exceptions.json";

import characterPaths from "docs/swagger/resources/character/paths.json";
import characterReq from "docs/swagger/resources/character/requests.json";
import characterRes from "docs/swagger/resources/character/responses.json";

const build = new BuildSwagger();

build.insertInfo([information]);

build.insertSecurity([authentication]);

build.insertComponents([exceptions, characterReq, characterRes]);

build.insertPaths([characterPaths]);

build.save();

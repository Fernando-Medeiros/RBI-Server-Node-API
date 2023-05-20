import 'tsconfig-paths/register';
import { BuildSwagger } from 'docs/swagger/build/build.impl';

import information from 'docs/swagger/config/info.json';

import authentication from 'docs/swagger/config/authentication.json';
import exceptions from 'docs/swagger/config/exceptions.json';

import characterPaths from 'docs/swagger/resources/character/paths.json';
import characterReq from 'docs/swagger/resources/character/requests.json';
import characterRes from 'docs/swagger/resources/character/responses.json';

import statusPaths from 'docs/swagger/resources/status/paths.json';
import statusReq from 'docs/swagger/resources/status/requests.json';
import statusRes from 'docs/swagger/resources/status/responses.json';

import equipmentPaths from 'docs/swagger/resources/equipment/paths.json';
import equipmentReq from 'docs/swagger/resources/equipment/requests.json';
import equipmentRes from 'docs/swagger/resources/equipment/responses.json';

import inventoryPaths from 'docs/swagger/resources/inventory/paths.json';
import inventoryReq from 'docs/swagger/resources/inventory/requests.json';
import inventoryRes from 'docs/swagger/resources/inventory/responses.json';

import skillsPaths from 'docs/swagger/resources/skills/paths.json';
import skillsReq from 'docs/swagger/resources/skills/requests.json';
import skillsRes from 'docs/swagger/resources/skills/responses.json';

const build = new BuildSwagger();

build.insertInfo([information]);

build.insertSecurity([authentication]);

build.insertComponents([
    exceptions,
    characterReq,
    characterRes,
    statusReq,
    statusRes,
    equipmentReq,
    equipmentRes,
    inventoryReq,
    inventoryRes,
    skillsReq,
    skillsRes,
]);

build.insertPaths([
    characterPaths,
    statusPaths,
    equipmentPaths,
    inventoryPaths,
    skillsPaths,
]);

build.save();

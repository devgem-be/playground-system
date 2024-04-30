import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CeoService } from "./ceo.service";
import { CeoControllerBase } from "./base/ceo.controller.base";

@swagger.ApiTags("ceos")
@common.Controller("ceos")
export class CeoController extends CeoControllerBase {
  constructor(
    protected readonly service: CeoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

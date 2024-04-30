import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CeoModuleBase } from "./base/ceo.module.base";
import { CeoService } from "./ceo.service";
import { CeoController } from "./ceo.controller";
import { CeoResolver } from "./ceo.resolver";

@Module({
  imports: [CeoModuleBase, forwardRef(() => AuthModule)],
  controllers: [CeoController],
  providers: [CeoService, CeoResolver],
  exports: [CeoService],
})
export class CeoModule {}

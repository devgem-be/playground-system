import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CeoServiceBase } from "./base/ceo.service.base";

@Injectable()
export class CeoService extends CeoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

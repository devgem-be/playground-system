/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Ceo as PrismaCeo,
  Company as PrismaCompany,
  Person as PrismaPerson,
} from "@prisma/client";

export class CeoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CeoCountArgs, "select">): Promise<number> {
    return this.prisma.ceo.count(args);
  }

  async ceos<T extends Prisma.CeoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CeoFindManyArgs>
  ): Promise<PrismaCeo[]> {
    return this.prisma.ceo.findMany<Prisma.CeoFindManyArgs>(args);
  }
  async ceo<T extends Prisma.CeoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CeoFindUniqueArgs>
  ): Promise<PrismaCeo | null> {
    return this.prisma.ceo.findUnique(args);
  }
  async createCeo<T extends Prisma.CeoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CeoCreateArgs>
  ): Promise<PrismaCeo> {
    return this.prisma.ceo.create<T>(args);
  }
  async updateCeo<T extends Prisma.CeoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CeoUpdateArgs>
  ): Promise<PrismaCeo> {
    return this.prisma.ceo.update<T>(args);
  }
  async deleteCeo<T extends Prisma.CeoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CeoDeleteArgs>
  ): Promise<PrismaCeo> {
    return this.prisma.ceo.delete(args);
  }

  async getCompany(parentId: string): Promise<PrismaCompany | null> {
    return this.prisma.ceo
      .findUnique({
        where: { id: parentId },
      })
      .company();
  }

  async getPerson(parentId: string): Promise<PrismaPerson | null> {
    return this.prisma.ceo
      .findUnique({
        where: { id: parentId },
      })
      .person();
  }
}

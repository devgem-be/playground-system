/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AddressService } from "../address.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AddressCreateInput } from "./AddressCreateInput";
import { Address } from "./Address";
import { AddressFindManyArgs } from "./AddressFindManyArgs";
import { AddressWhereUniqueInput } from "./AddressWhereUniqueInput";
import { AddressUpdateInput } from "./AddressUpdateInput";
import { CompanyFindManyArgs } from "../../company/base/CompanyFindManyArgs";
import { Company } from "../../company/base/Company";
import { CompanyWhereUniqueInput } from "../../company/base/CompanyWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AddressControllerBase {
  constructor(
    protected readonly service: AddressService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Address })
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AddressCreateInput,
  })
  async createAddress(
    @common.Body() data: AddressCreateInput
  ): Promise<Address> {
    return await this.service.createAddress({
      data: data,
      select: {
        addressLine1: true,
        addressLine2: true,
        city: true,
        country: true,
        createdAt: true,
        id: true,
        updatedAt: true,
        zipCode: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Address] })
  @ApiNestedQuery(AddressFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async addresses(@common.Req() request: Request): Promise<Address[]> {
    const args = plainToClass(AddressFindManyArgs, request.query);
    return this.service.addresses({
      ...args,
      select: {
        addressLine1: true,
        addressLine2: true,
        city: true,
        country: true,
        createdAt: true,
        id: true,
        updatedAt: true,
        zipCode: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Address })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async address(
    @common.Param() params: AddressWhereUniqueInput
  ): Promise<Address | null> {
    const result = await this.service.address({
      where: params,
      select: {
        addressLine1: true,
        addressLine2: true,
        city: true,
        country: true,
        createdAt: true,
        id: true,
        updatedAt: true,
        zipCode: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Address })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AddressUpdateInput,
  })
  async updateAddress(
    @common.Param() params: AddressWhereUniqueInput,
    @common.Body() data: AddressUpdateInput
  ): Promise<Address | null> {
    try {
      return await this.service.updateAddress({
        where: params,
        data: data,
        select: {
          addressLine1: true,
          addressLine2: true,
          city: true,
          country: true,
          createdAt: true,
          id: true,
          updatedAt: true,
          zipCode: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Address })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAddress(
    @common.Param() params: AddressWhereUniqueInput
  ): Promise<Address | null> {
    try {
      return await this.service.deleteAddress({
        where: params,
        select: {
          addressLine1: true,
          addressLine2: true,
          city: true,
          country: true,
          createdAt: true,
          id: true,
          updatedAt: true,
          zipCode: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/companies")
  @ApiNestedQuery(CompanyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "read",
    possession: "any",
  })
  async findCompanies(
    @common.Req() request: Request,
    @common.Param() params: AddressWhereUniqueInput
  ): Promise<Company[]> {
    const query = plainToClass(CompanyFindManyArgs, request.query);
    const results = await this.service.findCompanies(params.id, {
      ...query,
      select: {
        address: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/companies")
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "update",
    possession: "any",
  })
  async connectCompanies(
    @common.Param() params: AddressWhereUniqueInput,
    @common.Body() body: CompanyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      companies: {
        connect: body,
      },
    };
    await this.service.updateAddress({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/companies")
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "update",
    possession: "any",
  })
  async updateCompanies(
    @common.Param() params: AddressWhereUniqueInput,
    @common.Body() body: CompanyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      companies: {
        set: body,
      },
    };
    await this.service.updateAddress({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/companies")
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "update",
    possession: "any",
  })
  async disconnectCompanies(
    @common.Param() params: AddressWhereUniqueInput,
    @common.Body() body: CompanyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      companies: {
        disconnect: body,
      },
    };
    await this.service.updateAddress({
      where: params,
      data,
      select: { id: true },
    });
  }
}

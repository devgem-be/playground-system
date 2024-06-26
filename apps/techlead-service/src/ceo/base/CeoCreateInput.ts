/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CompanyWhereUniqueInput } from "../../company/base/CompanyWhereUniqueInput";
import { ValidateNested, IsDate, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { PersonWhereUniqueInput } from "../../person/base/PersonWhereUniqueInput";

@InputType()
class CeoCreateInput {
  @ApiProperty({
    required: true,
    type: () => CompanyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CompanyWhereUniqueInput)
  @Field(() => CompanyWhereUniqueInput)
  company!: CompanyWhereUniqueInput;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  fromDate!: Date;

  @ApiProperty({
    required: true,
    type: () => PersonWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PersonWhereUniqueInput)
  @Field(() => PersonWhereUniqueInput)
  person!: PersonWhereUniqueInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  untilDate?: Date | null;
}

export { CeoCreateInput as CeoCreateInput };

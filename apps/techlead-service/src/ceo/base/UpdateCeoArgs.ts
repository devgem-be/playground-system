/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CeoWhereUniqueInput } from "./CeoWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CeoUpdateInput } from "./CeoUpdateInput";

@ArgsType()
class UpdateCeoArgs {
  @ApiProperty({
    required: true,
    type: () => CeoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CeoWhereUniqueInput)
  @Field(() => CeoWhereUniqueInput, { nullable: false })
  where!: CeoWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CeoUpdateInput,
  })
  @ValidateNested()
  @Type(() => CeoUpdateInput)
  @Field(() => CeoUpdateInput, { nullable: false })
  data!: CeoUpdateInput;
}

export { UpdateCeoArgs as UpdateCeoArgs };
/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CeoWhereUniqueInput } from "../../ceo/base/CeoWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CeoUpdateManyWithoutPeopleInput {
  @Field(() => [CeoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CeoWhereUniqueInput],
  })
  connect?: Array<CeoWhereUniqueInput>;

  @Field(() => [CeoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CeoWhereUniqueInput],
  })
  disconnect?: Array<CeoWhereUniqueInput>;

  @Field(() => [CeoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CeoWhereUniqueInput],
  })
  set?: Array<CeoWhereUniqueInput>;
}

export { CeoUpdateManyWithoutPeopleInput as CeoUpdateManyWithoutPeopleInput };

import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CeoWhereInput = {
  company?: CompanyWhereUniqueInput;
  createdAt?: DateTimeFilter;
  fromDate?: DateTimeFilter;
  id?: StringFilter;
  person?: PersonWhereUniqueInput;
  untilDate?: DateTimeNullableFilter;
  updatedAt?: DateTimeFilter;
};

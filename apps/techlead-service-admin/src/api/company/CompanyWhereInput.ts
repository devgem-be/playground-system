import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CeoListRelationFilter } from "../ceo/CeoListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type CompanyWhereInput = {
  address?: AddressWhereUniqueInput;
  ceos?: CeoListRelationFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  updatedAt?: DateTimeFilter;
};

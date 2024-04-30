import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CompanyListRelationFilter } from "../company/CompanyListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type AddressWhereInput = {
  addressLine1?: StringFilter;
  addressLine2?: StringNullableFilter;
  city?: StringFilter;
  companies?: CompanyListRelationFilter;
  country?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  updatedAt?: DateTimeFilter;
  zipCode?: StringFilter;
};

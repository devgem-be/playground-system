import { CeoListRelationFilter } from "../ceo/CeoListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type PersonWhereInput = {
  ceos?: CeoListRelationFilter;
  createdAt?: DateTimeFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  updatedAt?: DateTimeFilter;
};

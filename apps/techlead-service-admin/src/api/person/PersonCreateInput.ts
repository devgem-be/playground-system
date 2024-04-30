import { CeoCreateNestedManyWithoutPeopleInput } from "./CeoCreateNestedManyWithoutPeopleInput";

export type PersonCreateInput = {
  ceos?: CeoCreateNestedManyWithoutPeopleInput;
  firstName: string;
  lastName: string;
};

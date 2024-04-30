import { CeoUpdateManyWithoutPeopleInput } from "./CeoUpdateManyWithoutPeopleInput";

export type PersonUpdateInput = {
  ceos?: CeoUpdateManyWithoutPeopleInput;
  firstName?: string;
  lastName?: string;
};

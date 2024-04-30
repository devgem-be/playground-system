import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CeoCreateNestedManyWithoutCompaniesInput } from "./CeoCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  address: AddressWhereUniqueInput;
  ceos?: CeoCreateNestedManyWithoutCompaniesInput;
  name: string;
};

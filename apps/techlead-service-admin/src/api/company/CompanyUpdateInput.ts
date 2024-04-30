import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CeoUpdateManyWithoutCompaniesInput } from "./CeoUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  address?: AddressWhereUniqueInput;
  ceos?: CeoUpdateManyWithoutCompaniesInput;
  name?: string;
};

import { CompanyCreateNestedManyWithoutAddressesInput } from "./CompanyCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  addressLine1: string;
  addressLine2?: string | null;
  city: string;
  companies?: CompanyCreateNestedManyWithoutAddressesInput;
  country: string;
  zipCode: string;
};

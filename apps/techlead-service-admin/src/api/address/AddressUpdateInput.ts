import { CompanyUpdateManyWithoutAddressesInput } from "./CompanyUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  addressLine1?: string;
  addressLine2?: string | null;
  city?: string;
  companies?: CompanyUpdateManyWithoutAddressesInput;
  country?: string;
  zipCode?: string;
};

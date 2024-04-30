import { Address as TAddress } from "../api/address/Address";

export const ADDRESS_TITLE_FIELD = "addressLine1";

export const AddressTitle = (record: TAddress): string => {
  return record.addressLine1?.toString() || String(record.id);
};

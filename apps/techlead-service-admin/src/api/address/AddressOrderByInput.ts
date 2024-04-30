import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  addressLine1?: SortOrder;
  addressLine2?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  zipCode?: SortOrder;
};

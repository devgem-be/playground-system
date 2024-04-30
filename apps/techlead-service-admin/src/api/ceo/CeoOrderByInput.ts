import { SortOrder } from "../../util/SortOrder";

export type CeoOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  fromDate?: SortOrder;
  id?: SortOrder;
  personId?: SortOrder;
  untilDate?: SortOrder;
  updatedAt?: SortOrder;
};

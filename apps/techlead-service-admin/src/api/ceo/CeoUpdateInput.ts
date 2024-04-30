import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type CeoUpdateInput = {
  company?: CompanyWhereUniqueInput;
  fromDate?: Date;
  person?: PersonWhereUniqueInput;
  untilDate?: Date | null;
};

import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type CeoCreateInput = {
  company: CompanyWhereUniqueInput;
  fromDate: Date;
  person: PersonWhereUniqueInput;
  untilDate?: Date | null;
};

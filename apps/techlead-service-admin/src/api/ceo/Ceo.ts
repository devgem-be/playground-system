import { Company } from "../company/Company";
import { Person } from "../person/Person";

export type Ceo = {
  company?: Company;
  createdAt: Date;
  fromDate: Date;
  id: string;
  person?: Person;
  untilDate: Date | null;
  updatedAt: Date;
};

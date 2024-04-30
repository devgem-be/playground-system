import { Company } from "../company/Company";

export type Address = {
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  companies?: Array<Company>;
  country: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  zipCode: string;
};

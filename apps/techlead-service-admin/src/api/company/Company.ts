import { Address } from "../address/Address";
import { Ceo } from "../ceo/Ceo";

export type Company = {
  address?: Address;
  ceos?: Array<Ceo>;
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
};

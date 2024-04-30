import { Ceo } from "../ceo/Ceo";

export type Person = {
  ceos?: Array<Ceo>;
  createdAt: Date;
  firstName: string;
  id: string;
  lastName: string;
  updatedAt: Date;
};

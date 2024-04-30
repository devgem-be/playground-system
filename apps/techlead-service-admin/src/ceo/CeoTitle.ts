import { Ceo as TCeo } from "../api/ceo/Ceo";

export const CEO_TITLE_FIELD = "id";

export const CeoTitle = (record: TCeo): string => {
  return record.id?.toString() || String(record.id);
};

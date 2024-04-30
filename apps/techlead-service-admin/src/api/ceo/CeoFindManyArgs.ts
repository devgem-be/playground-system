import { CeoWhereInput } from "./CeoWhereInput";
import { CeoOrderByInput } from "./CeoOrderByInput";

export type CeoFindManyArgs = {
  where?: CeoWhereInput;
  orderBy?: Array<CeoOrderByInput>;
  skip?: number;
  take?: number;
};

import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { PersonTitle } from "../person/PersonTitle";

export const CeoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <DateTimeInput label="From Date" source="fromDate" />
        <ReferenceInput source="person.id" reference="Person" label="Person">
          <SelectInput optionText={PersonTitle} />
        </ReferenceInput>
        <DateTimeInput label="Until Date" source="untilDate" />
      </SimpleForm>
    </Create>
  );
};

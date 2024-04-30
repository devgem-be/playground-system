import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { CompanyTitle } from "../company/CompanyTitle";
import { PersonTitle } from "../person/PersonTitle";

export const CeoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

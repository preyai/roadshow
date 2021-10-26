import * as React from "react";
import {
    List,
    Datagrid,
    Edit,
    Show,
    Create,
    SimpleForm,
    TextField,
    EditButton,
    TextInput,
    BooleanInput,
    ReferenceInput,
    SelectInput,
    SimpleShowLayout,
    BooleanField,ReferenceField
} from 'react-admin';
import Icon from '@mui/icons-material/PeopleAlt';

export const MemberIcon = Icon;

export const MemberList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="phone" />
            <EditButton basePath="/members" />
        </Datagrid>
    </List>
);

const MemberTitle = ({ record }) => {
    return <span>Member {record ? `"${record.name}"` : ''}</span>;
};

export const MemberShow = (props) => (
    <Show  title={<MemberTitle />} {...props}>
        <SimpleShowLayout>
            <TextField  source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="phone" />
            <ReferenceField  source="region" reference="regions">
                <TextField source="label" />
            </ReferenceField >
            <TextField source="comment"  multiline/>
            <BooleanField  source="status" />
        </SimpleShowLayout>
    </Show >
);

export const MemberEdit = (props) => (
    <Edit title={<MemberTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput disabled source="name" />
            <TextInput disabled source="email" />
            <TextInput disabled source="phone" />
            <ReferenceInput disabled source="region" reference="regions">
                <SelectInput optionText="label" />
            </ReferenceInput>
            <TextInput disabled source="comment"  multiline/>
            <BooleanInput  source="status" />
        </SimpleForm>
    </Edit>
);

export const MemberCreate = (props) => (
    <Create title="Create a User" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="phone" />
            <ReferenceInput source="region" reference="regions">
                <SelectInput optionText="label" />
            </ReferenceInput>
            <TextInput source="comment"  multiline/>
            <BooleanInput  source="status" />
        </SimpleForm>
    </Create>
);
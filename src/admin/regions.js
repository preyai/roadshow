import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, TextField, EditButton, TextInput } from 'react-admin';
import Icon from '@mui/icons-material/LocationCity';

export const RegionIcon = Icon;

export const RegionList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="value" />
            <TextField source="label" />
            <TextField source="limit" />
            <EditButton basePath="/regions" />
        </Datagrid>
    </List>
);

const RegionTitle = ({ record }) => {
    return <span>Region {record ? `"${record.email}"` : ''}</span>;
};

export const RegionEdit = (props) => (
    <Edit title={<RegionTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="value" />
            <TextInput source="label" />
            <TextInput source="limit" />
            <TextInput source="date" />
            <TextInput source="time" />
            <TextInput source="address" multiline />
        </SimpleForm>
    </Edit>
);

export const RegionCreate = (props) => (
    <Create title="Create a User" {...props}>
        <SimpleForm>
            <TextInput source="value" />
            <TextInput source="label" />
            <TextInput source="limit" />
        </SimpleForm>
    </Create>
);
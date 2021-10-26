import * as React from "react";
import { authClient } from 'ra-data-feathers';
import { Admin, Resource,fetchUtils  } from 'react-admin';
import { app } from '../feathersClient';
import { UserCreate, UserEdit, UserIcon, UserList } from '../admin/users';
import restClient from "../restClient";



const restClientOptions = {
    id: '_id',
    usePatch: true
};

const authClientOptions = {
    storageKey: 'feathers-jwt',
    authenticate: {
        strategy: 'local',
    },
    passwordField: 'password',
    usernameField: 'email',
    permissionsField: 'permissions',
    redirectTo: '/login',
}
// const dataProvider = restClient(app, restClientOptions);


export default function AdminPage(props) {
    return (
        <Admin
            dataProvider={restClient(app, restClientOptions)}
            authProvider={authClient(app, authClientOptions)}
        >
            {permissions => [
                permissions.includes("admin") && <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />,
            ]}
        </Admin>
    );
}
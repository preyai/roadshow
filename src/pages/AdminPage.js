import * as React from "react";
import { authClient } from 'ra-data-feathers';
import { Admin, Resource  } from 'react-admin';
import { app } from '../feathersClient';
import { UserCreate, UserEdit, UserIcon, UserList } from '../admin/users';
import restClient from "../restClient";
import {MemberCreate, MemberEdit, MemberIcon, MemberList, MemberShow} from "../admin/members";
import {RegionCreate, RegionEdit, RegionIcon, RegionList} from "../admin/regions";



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
                permissions.includes("admin") && <Resource name="members" list={MemberList} show={MemberShow} edit={MemberEdit} create={MemberCreate} icon={MemberIcon} />,
                permissions.includes("admin") && <Resource name="regions" list={RegionList} edit={RegionEdit} create={RegionCreate} icon={RegionIcon} />,
            ]}
        </Admin>
    );
}
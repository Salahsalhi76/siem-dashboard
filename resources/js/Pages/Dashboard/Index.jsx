import React from 'react';
import {Link} from "@inertiajs/react";
import {route} from "ziggy-js";
import {InertiaLink} from "@inertiajs/inertia-react";
import Layout from "../../Components/Layout.jsx";

const Index = () => {



    return (
        <div>
            Dashboard
            <br/>
            <InertiaLink
                href={'/logout'}
                method='POST'
            >
                Logout
            </InertiaLink>
         </div>
    );
};
Index.layout = page => <Layout children={page} title="Dashboard" />

export default Index;

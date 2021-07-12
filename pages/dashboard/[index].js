import React, { useState, useEffect } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import useAuth from "../../hooks/useAuth";
import classNames from "classnames";
import { useRouter } from "next/router";
import { Icon } from "semantic-ui-react";
import { getMeApi } from "../../api/user";
import UserSidebar from "../../components/Dashboard/Sidebar/UserSideBar";

import NuevaGuia from "../../components/Dashboard/Guides/NuevaGuia/nuevaGuia";
import Guias from '../../components/Dashboard/Guides/Guias/Guias';

function dashboard() {
    const [user, setUser] = useState(undefined);
    const { auth, logout, setReloadUser } = useAuth();
    const [tabs, setTabs] = useState(1);
    const router = useRouter();
    // console.log(router.kquery.index);

    useEffect(() => {
        (async () => {
          const response = await getMeApi(logout);
          setUser(response || null);
        })();
    }, [auth]);

    
    // const { activeItem } = this.state
    
    const [activeItem, setActiveItem] = useState('MIS GUIAS TEMÁTICAS');
    
    if (user === undefined) return null;
    if (!auth && !user) {
        router.replace("/");
        return null;
    }

    const handleItemClick = (e, { name }) => setActiveItem(name)

    return (
        <div className="dashboard">
            <UserSidebar router = {router.query} />

            <div className="dashboard__content">
            
                {router.query.index == "guias" ? (
                    <Guias />
                ): null}

                {router.query.index == "crear-guia" ? (
                     <NuevaGuia auth={auth}/>
                ): null}

            </div>
            
        </div>
    )
}

export default dashboard

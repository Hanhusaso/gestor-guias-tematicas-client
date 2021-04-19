import React, { useState, useEffect } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import Guia from "../../components/Dashboard/Content/guia";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/router";
import { getMeApi } from "../../api/user";

function dashboard() {
    const [user, setUser] = useState(undefined);
    const { auth, logout, setReloadUser } = useAuth();
    const [tabs, setTabs] = useState(1);
    const router = useRouter();

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
        <div>
            <div className="dashboard">
                {/* <Image src="/logo-dashboard.svg" alt="logo-dashboard" /> */}
                <nav className="menu-nav">
                    
                    <Menu pointing secondary vertical>
                        <Menu.Item
                        name='MIS GUIAS TEMÁTICAS'
                        active={activeItem === 'MIS GUIAS TEMÁTICAS'}
                        onClick={handleItemClick}
                        />
                        <Menu.Item
                        name='INGRESAR NUEVA GUÍA TEMÁTICA'
                        active={activeItem === 'INGRESAR NUEVA GUÍA TEMÁTICA'}
                        onClick={handleItemClick}
                        />
                        {/* <Menu.Item
                        name='friends'
                        active={activeItem === 'friends'}
                        onClick={handleItemClick}
                        /> */}
                    </Menu>
                </nav>

                
            </div>

                {activeItem === 'INGRESAR NUEVA GUÍA TEMÁTICA' ? (
                    <Guia />
                ): null}
                
                    
        </div>
    )
}

export default dashboard

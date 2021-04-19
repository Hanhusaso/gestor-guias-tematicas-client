import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
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
    
    const [activeItem, setActiveItem] = useState('home');
    if (user === undefined) return null;
    if (!auth && !user) {
        router.replace("/");
        return null;
    }

    const handleItemClick = (e, { name }) => setActiveItem(name)

    return (
        <div className="dashboard">
            <nav className="menu-nav">
                <Menu pointing secondary vertical>
                    <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                    />
                    <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={handleItemClick}
                    />
                    <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={handleItemClick}
                    />
                </Menu>
            </nav>
            {/* <h1>Dashboard</h1> */}
        </div>
    )
}

export default dashboard

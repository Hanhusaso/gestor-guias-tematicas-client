import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import useAuth from "../../hooks/useAuth";
import classNames from "classnames";
import { useRouter } from "next/router";
import { Icon } from "semantic-ui-react";
import { getMeApi } from "../../api/user";
import UserSidebar from "../../components/Dashboard/User/Sidebar/UserSideBar";
import Libros from "../../components/Dashboard/User/Content/Libros";
import Revistas from "../../components/Dashboard/User/Content/Revistas";
import Tesis from "../../components/Dashboard/User/Content/Tesis";
import Enciclopedias from "../../components/Dashboard/User/Content/Enciclopedias";
import BaseDatos from "../../components/Dashboard/User/Content/BaseDatos";

function dashboard() {
    const [user, setUser] = useState(undefined);
    const { auth, logout, setReloadUser } = useAuth();
    const [tabs, setTabs] = useState(1);
    const router = useRouter();

    
    const changeTabs1 = () => {
        setTabs(1);
    };

    const changeTabs2 = () => {
        setTabs(2);
    };

    const changeTabs3 = () => {
        setTabs(3);
    };
    const changeTabs4 = () => {
        setTabs(4);
    };
    const changeTabs5 = () => {
        setTabs(5);
    };

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
            <UserSidebar />

            <div className="dashboard__content">

            <Menu className="five item">
                    <Menu.Item 
                        className={classNames({
                            active: tabs === 1,
                          })}
                        onClick={changeTabs1}
                    >
                        <Icon name="book"/>
                        <h4>Libros</h4>
                    </Menu.Item>

                    <Menu.Item  
                        className={classNames({
                            active: tabs === 2,
                          })}
                        onClick={changeTabs2}
                    >
                        <h4>Tesis</h4>
                    </Menu.Item >
                    <Menu.Item  
                        className={classNames({
                            active: tabs === 3,
                          })}
                        onClick={changeTabs3}
                    >
                        <h4>Revistas</h4>
                    </Menu.Item >
                    <Menu.Item  
                        className={classNames({
                            active: tabs === 4,
                          })}
                        onClick={changeTabs4}
                    >
                        <h4>Enciclopedias y diccionarios</h4>
                    </Menu.Item >
                    <Menu.Item  
                        className={classNames({
                            active: tabs === 5,
                          })}
                        onClick={changeTabs5}
                    >
                        <h4>Bases de Datos</h4>
                    </Menu.Item >
                </Menu>

                {tabs == 1 ? (
                    <Libros />
                ): null}

                {tabs == 2 ? (
                     <Revistas />
                ): null}

                {tabs == 3 ? (
                     <Tesis />
                ): null}
                {tabs == 4 ? (
                     <Enciclopedias />
                ): null}
                {tabs == 5 ? (
                     <BaseDatos />
                ): null}
            </div>
            {/* <nav className="menu-nav">
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
                <button onClick={ logout }>Cerrar Sesion</button>
            </nav> */}
            {/* <h1>Dashboard</h1> */}
        </div>
    )
}

export default dashboard

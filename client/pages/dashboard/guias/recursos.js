import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from "next/router";
import Libros from "../../../components/Dashboard/Content/Libros"
import Revistas from "../../../components/Dashboard/User/Content/Revistas";
import Tesis from "../../../components/Dashboard/User/Content/Tesis";
import Enciclopedias from "../../../components/Dashboard/User/Content/Enciclopedias";
import BaseDatos from "../../../components/Dashboard/User/Content/BaseDatos";
import useAuth from "../../../hooks/useAuth";
import classNames from "classnames";
import { Icon, Button } from "semantic-ui-react";
import { getMeApi } from "../../../api/user";
import UserSidebar from "../../../components/Dashboard/User/Sidebar/UserSideBar";


function Recursos() {
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

    const changeTabs6 = () => {
        setTabs(6);
    };

    useEffect(() => {
        (async () => {
          const response = await getMeApi(logout);
          setUser(response || null);
        })();
    }, [auth]);

    
    // const { activeItem } = this.state
    
    // const [activeItem, setActiveItem] = useState('MIS GUIAS TEMÁTICAS');

    return (

        <div className="dashboard resources">
            <UserSidebar />

            <div className="dashboard__content">
            
            <Menu className="resources__header">
                    <h3 className="title">GUÍA 001: BIOLOGÍA</h3>
                    {/* <Button primary>Primary</Button> */}
            </Menu>

            <div className="dashboard__content__padding">
                <h3>Recursos:</h3>

                <Menu className="six item">
                            <Menu.Item 
                                className={classNames({
                                    active: tabs === 1,
                                })+" resources__item"}
                                onClick={changeTabs1}
                            >
                                <Icon name="book" size='large'/>
                                <h4 className="resources__item__name">Libros</h4>
                            </Menu.Item>

                            <Menu.Item  
                                className={classNames({
                                    active: tabs === 2,
                                })+" resources__item"}
                                onClick={changeTabs2}
                            >
                                <Icon name="graduation" size='large'/>
                                <h4 className="resources__item__name">Tesis</h4>
                            </Menu.Item >

                            <Menu.Item  
                                className={classNames({
                                    active: tabs === 3,
                                })+" resources__item"}
                                onClick={changeTabs3}
                            >
                                <Icon name="file outline" size='large'/>
                                <h4 className="resources__item__name">Revistas</h4>
                            </Menu.Item >

                            <Menu.Item  
                                className={classNames({
                                    active: tabs === 4,
                                })+" resources__item"}
                                onClick={changeTabs4}
                            >
                                <h4 className="resources__item__name">Enciclopedias y diccionarios</h4>
                            </Menu.Item >

                            <Menu.Item  
                                className={classNames({
                                    active: tabs === 5,
                                })+" resources__item"}
                                onClick={changeTabs5}
                            >
                                
                                <Icon name="database" size='large'/>
                                <h4 className="resources__item__name">Bases de Datos</h4>
                            </Menu.Item >

                            <Menu.Item  
                                className={classNames({
                                    active: tabs === 6,
                                })+" resources__item"}
                                onClick={changeTabs6}
                            >
                                
                                <Icon name="window restore outline" size='large'/>
                                <h4 className="resources__item__name">Otros sitios web</h4>
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
        </div>

        </div>
            
        

       
    )
}

export default Recursos

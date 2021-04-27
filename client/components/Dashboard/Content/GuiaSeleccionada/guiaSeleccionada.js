import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from "next/router";
import Libros from "../../User/Content/Libros";
import Revistas from "../../User/Content/Revistas";
import Tesis from "../../User/Content/Tesis";
import Enciclopedias from "../../User/Content/Enciclopedias";
import BaseDatos from "../../User/Content/BaseDatos";
import useAuth from "../../../../hooks/useAuth";
import classNames from "classnames";
import { Icon } from "semantic-ui-react";
import { getMeApi } from "../../../../api/user";

function GuiaSeleccionada() {
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
    
    // const [activeItem, setActiveItem] = useState('MIS GUIAS TEMÁTICAS');

    return (
        <div>
            <Menu>
                    <h3 className="title">GUÍA 001: BIOLOGÍA</h3>
            </Menu>

            <div className="dashboard__content__padding">
                <h3>Recursos:</h3>

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
        </div>
    )
}

export default GuiaSeleccionada

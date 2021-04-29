import React, { useState, useEffect } from 'react'
import { List, Image, Icon } from "semantic-ui-react";
import useAuth from "../../../../../hooks/useAuth";
import Link from 'next/link';

export default function UserSidebar() {
    const { logout } = useAuth();
    const [select1, setSelect1] = useState('user-sidebar__element select');
    const [select2, setSelect2] = useState('user-sidebar__element');

    const changeSelect1 = () => {
        setSelect1("user-sidebar__element select");
        setSelect2("user-sidebar__element");
    };

    const changeSelect2 = () => {
        setSelect1("user-sidebar__element");
        setSelect2("user-sidebar__element select");
    };

    return (
        <div className="user-sidebar">

            <div className="w-100">
            {/* className="user-sidebar__head" */}
                <div className="d-center img-dashboard">
                    <Image src="/escudo_biblioteca.svg" alt="logo-dashboard" />
                </div>
                
                <List className="padding-list d-center flex-column">
                    
                    <Link href="/dashboard/guias">
                        <List.Item className={select1} onClick={changeSelect1}>
                            <Icon name="users"/>
                            <div className="content">
                                MIS GUIAS TEMATICAS
                            </div>
                        </List.Item>
                    </Link>
                    <Link href="/dashboard/crear-guia">
                        <List.Item className={select2} onClick={changeSelect2}>
                            <Icon name="marker"/>
                            <div className="content">
                                INGRESAR NUEVA GUÍA TEMÁTICA
                            </div>
                        </List.Item>
                    </Link>
                </List>
            </div>

            <List className="user d-center flex-column w-100">

                <List.Item className="user-sidebar__element">
                    <Icon name="users"/>
                    <div className="content">
                        PERFIL
                    </div>
                </List.Item>

                <List.Item className="user-sidebar__element">
                    <Icon name="marker"/>
                    <div className="content">
                        SEGURIDAD
                    </div>
                </List.Item>

                <List.Item className="user-sidebar__element" onClick= { logout }>
                    {/* <button  className="content"> */}
                    <Icon name="user"/>
                    <div className="content">
                        CERRAR SESIÓN
                    </div>    
                    {/* </button> */}
                </List.Item>

            </List>

        </div>
    )
}

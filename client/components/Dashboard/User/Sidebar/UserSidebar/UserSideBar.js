import React from 'react'
import { List, Image, Icon } from "semantic-ui-react";
import useAuth from "../../../../../hooks/useAuth";
import Link from 'next/link';

export default function UserSidebar() {
    const { logout } = useAuth();
    
    return (
        <div className="user-sidebar">

            <div className="w-100">
            {/* className="user-sidebar__head" */}
                <div className="d-center img-dashboard">
                    <Image src="/escudo_biblioteca.svg" alt="logo-dashboard" />
                </div>
                
                <List className="padding-list d-center flex-column">
                    
                    <Link href="/dashboard/guias">
                        <List.Item className="py-15px px-15 pointer w-100 option">
                            <Icon name="users"/>
                            <div className="content">
                                MIS GUIAS TEMATICAS
                            </div>
                        </List.Item>
                    </Link>
                    <Link href="/dashboard/crear-guia">
                        <List.Item className="py-15px px-15 pointer w-100 option">
                            <Icon name="marker"/>
                            <div className="content">
                                INGRESAR NUEVA GUÍA TEMÁTICA
                            </div>
                        </List.Item>
                    </Link>
                </List>
            </div>

            <List className="user d-center flex-column w-100">

                <List.Item className="pointer px-15 w-100">
                    <Icon name="users"/>
                    <div className="content">
                        PERFIL
                    </div>
                </List.Item>

                <List.Item className="pt-15 pointer px-15 w-100">
                    <Icon name="marker"/>
                    <div className="content">
                        SEGURIDAD
                    </div>
                </List.Item>

                <List.Item className="py-15px pointer px-15 w-100" onClick= { logout }>
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

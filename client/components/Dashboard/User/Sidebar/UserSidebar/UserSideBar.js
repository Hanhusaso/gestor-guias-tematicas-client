import React from 'react'
import { List, Image, Icon } from "semantic-ui-react";
import useAuth from "../../../../../hooks/useAuth";

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
                    
                    <List.Item className="w-65 px-15">
                        <Icon name="users"/>
                        <div className="content">
                            MIS GUIAS TEMATICAS
                        </div>
                    </List.Item>

                    <List.Item className="w-65 px-15">
                        <Icon name="marker"/>
                        <div className="content">
                            INGRESAR NUEVA GUÍA TEMÁTICA
                        </div>
                    </List.Item>

                </List>
            </div>

            <List className="user d-center flex-column w-100">

                <List.Item className="w-65">
                    <Icon name="users"/>
                    <div className="content">
                        PERFIL
                    </div>
                </List.Item>

                <List.Item className="w-65 pt-15">
                    <Icon name="marker"/>
                    <div className="content">
                        SEGURIDAD
                    </div>
                </List.Item>

                <List.Item className="w-65 px-15" onClick= { logout }>
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

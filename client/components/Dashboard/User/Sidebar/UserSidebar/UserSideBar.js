import React from 'react'
import { List, Image, Icon } from "semantic-ui-react";
import useAuth from "../../../../../hooks/useAuth";


export default function UserSidebar() {
    const { logout } = useAuth();
    return (
        <div className="user-sidebar">
            {/* <div className="user-sidebar__head">
                <Image src="/logo-dashboard.svg" alt="logo-dashboard" />
            </div> */}
            
            <List className="padding-list">

                <List.Item>
                    <Icon name="users"/>
                    <div className="content">
                        MIS GUIAS TEMATICAS
                    </div>
                </List.Item>

                <List.Item>
                    <Icon name="marker"/>
                    <div className="content">
                        INGRESAR NUEVA GUÍA TEMÁTICA
                    </div>
                </List.Item>

            </List>


            <List className="user">

                <List.Item>
                    <Icon name="users"/>
                    <div className="content">
                        PERFIL
                    </div>
                </List.Item>

                <List.Item>
                    <Icon name="marker"/>
                    <div className="content">
                        SEGURIDAD
                    </div>
                </List.Item>

                <List.Item>
                    <button onClick= { logout } className="content">
                        <Icon name="user"/>
                        CERRAR SESIÓN
                    </button>
                </List.Item>

            </List>

        </div>
    )
}

import React, { useState, useEffect } from 'react'
import { List, Image, Icon, Modal, Button, Header } from "semantic-ui-react";


export default function EditarColeccionBaseDatos(props) {

    const {edit, setEdit} = props;
    const closeEdit = () => setEdit(false);

    return (
        <div className="colections padding-top-46 container-30">
            <div className="d-flex">
                <Icon name="angle left pointer" size='large' onClick={closeEdit} />
                <h3 className="m-0">Editar Coleccion Base de Datos</h3>
            </div>
        </div>
    )
}
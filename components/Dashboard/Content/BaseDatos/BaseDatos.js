import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import ColeccionBaseDatos from './ColeccionBaseDatos';
import EditarColeccionBaseDatos from './EditarColeccionBaseDatos';


export default function Libros() {
    const [showEditBaseDatos, setShowEditBaseDatos] = React.useState(false);
    const openShowEditBaseDatos = () => { setShowEditBaseDatos(true)}

    return (
        <div>
            {showEditBaseDatos == false ? (
                <ColeccionBaseDatos edit = {showEditBaseDatos} setEdit = {setShowEditBaseDatos} />
            ): null}
            
            {showEditBaseDatos == true ? (
                <EditarColeccionBaseDatos edit = {showEditBaseDatos} setEdit = {setShowEditBaseDatos} />
            ): null}
        </div>
    )
}
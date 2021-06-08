import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import ColeccionRevistas from './ColeccionRevistas';
import EditarColeccionRevistas from './EditarColeccionRevistas';
// import ColeccionBaseDatos from './ColeccionBaseDatos';
// import EditarColeccionBaseDatos from './EditarColeccionBaseDatos';


export default function Libros() {
    const [showEditRevistas, setShowEditRevistas] = React.useState(false);
    const openShowEditRevistas = () => { setShowEditRevistas(true)}

    return (
        <div>
            {showEditRevistas == false ? (
                <ColeccionRevistas edit = {showEditRevistas} setEdit = {setShowEditRevistas} />
            ): null}
            
            {showEditRevistas == true ? (
                <EditarColeccionRevistas edit = {showEditRevistas} setEdit = {setShowEditRevistas} />
            ): null}
        </div>
    )
}
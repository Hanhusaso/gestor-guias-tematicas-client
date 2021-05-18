import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import ColeccionLibros from './ColeccionLibros';
import EditarColeccionLibros from './EditarColeccionLibros';

export default function Libros() {
    const [showEdit, setShowEdit] = React.useState(false);
    const openShowEdit = () => { setShowEdit(true)}

    return (
        <div>
            {showEdit == false ? (
                <ColeccionLibros edit = {showEdit} setEdit = {setShowEdit} />
            ): null}
            
            {showEdit == true ? (
                <EditarColeccionLibros edit = {showEdit} setEdit = {setShowEdit} />
            ): null}
        </div>
    )
}
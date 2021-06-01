import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import ColeccionLibros from './ColeccionLibros';
import EditarColeccionLibros from './EditarColeccionLibros';

export default function Libros(props) {
    const { idGuia } = props;
    const [showEdit, setShowEdit] = React.useState(false);
    const openShowEdit = () => { setShowEdit(true)};

    console.log(idGuia);

    return (
        <div>
            {showEdit == false ? (
                <ColeccionLibros edit = {showEdit} setEdit = {setShowEdit} idGuia = {idGuia} />
            ): null}
            
            {showEdit == true ? (
                <EditarColeccionLibros edit = {showEdit} setEdit = {setShowEdit} />
            ): null}
        </div>
    )
}
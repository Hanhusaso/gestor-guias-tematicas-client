import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import ColeccionLibros from '../../Dashboard/Content/Libros/ColeccionLibros';
import EditarColeccionLibros from '../../Dashboard/Content/Libros/EditarColeccionLibros';
import ColectionsList from './Colectionslist';

export default function Colections(props) {
    const { idGuia, tipoRecurso } = props;
    const [showEdit, setShowEdit] = React.useState(false);
    const openShowEdit = () => { setShowEdit(true)};

    // console.log(idGuia);

    return (
        <div>
            {showEdit == false ? (
                <ColectionsList edit = {showEdit} setEdit = {setShowEdit} idGuia = {idGuia} tipoRecurso={tipoRecurso} />
            ): null}
            
            {showEdit == true ? (
                <EditarColeccionLibros edit = {showEdit} setEdit = {setShowEdit} />
            ): null}
        </div>
    )
}
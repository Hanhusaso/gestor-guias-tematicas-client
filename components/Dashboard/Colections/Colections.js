import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import EditLibros from '../../Dashboard/Colections/EditColections/EditLibros';
import ColectionsList from './Colectionslist';

export default function Colections(props) {
    const { idGuia, tipoRecurso, listaGuia } = props;
    const [showEdit, setShowEdit] = React.useState(false);
    const [listaColeccion, setListaColeccion] = React.useState([]);
    const openShowEdit = () => { setShowEdit(true)};

    // console.log(idGuia);

    return (
        <div>
            {showEdit == false ? (
                <ColectionsList edit = {showEdit} setEdit = {setShowEdit} idGuia = {idGuia} tipoRecurso={tipoRecurso} setListaColeccion={setListaColeccion}/>
            ): null}
            
            {showEdit == true ? (
                <EditLibros edit = {showEdit} setEdit = {setShowEdit} listaGuia = {listaGuia} listaColeccion={listaColeccion} setListaColeccion={setListaColeccion}/>
            ): null}
        </div>
    )
}
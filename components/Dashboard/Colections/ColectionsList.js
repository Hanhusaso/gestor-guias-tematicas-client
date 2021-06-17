import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { List, Image, Icon, Modal, Button, Header } from "semantic-ui-react";
import { size } from "lodash";
import { getColeccionesGuiaApi } from '../../../api/coleccion';
import CreateColectionModal from '../Modal/CreateColectionModal';
import DeleteModal from '../Modal/DeleteModal';
import { getOneGuia } from '../../../api/guia';

export default function ColectionsList(props) {

    const {idGuia, edit, setEdit, tipoRecurso} = props;
    const [colecciones, setColeciones] = useState([]);
    const [idLibro, setIdLibro] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const [guia, setGuia] = useState([]);
    const openEdit = () => setEdit(true);

    const [showModal, setShowModalLibro] = React.useState(false);
    const openShowModalLibro = () => { setShowModalLibro(true)}

    const [showModalDelete, setShowModalLibroDelete] = React.useState(false);
    // const [alejoNoJodas, setAlejoNoJodas] = useState(false);
    // const openShowModalLibroDelete = () => { }
    
    useEffect(() => {
        (async () => {
            // console.log("idGuiaaaaa",idGuia);
            // console.log(tipoRecurso);
            const response = await getColeccionesGuiaApi(tipoRecurso,idGuia);
            const responseGuia = await getOneGuia(idGuia);
            setColeciones(response);
            setGuia(responseGuia);
            console.log("response guia",responseGuia)
            // setAlejoNoJodas(false);
            return () => {setLoading(false);}
        })();
    });


    return (
        <div className="colections padding-top-46">
            <div className="colections__header">
                <h3 className="colections__header__title">COLECCIONES</h3>
                <div className="colections__header__button" onClick={openShowModalLibro}><Icon name="add circle"/> <h3 className="colections__header__create">Crear Colección</h3></div>     
            </div>

            <div className="colections__content container-30 padding-top-46">
                {colecciones && size(colecciones) === 0 && (
                    <div>
                        <h3>No hay colecciones</h3>
                    </div>
                )}
                { size(colecciones) > 0 &&
                    colecciones.map((coleccion, index) =>(
                        <div className="colections__content__element padding-bottom-25">
                            <div className="colections__content__element__box container-46">
                                <h3 key={index} className="m-0">{coleccion.nombre}</h3>
                                <div className="colections__content__element__box__button" onClick={openEdit}>
                                    Editar
                                </div>
                            </div>
                            <Icon name="trash alternate outline" size='large' onClick={ () => {setShowModalLibroDelete(true), setIdLibro(coleccion._id)}}/>
                        </div>
                        ) ) 
                }
            </div>

            <CreateColectionModal show = {showModal} setShow={setShowModalLibro} tipoRecurso={tipoRecurso} guia={guia} setLoading={setLoading}/>

            <DeleteModal show = {showModalDelete} setShow={setShowModalLibroDelete} tipo="libro" idDelete={idLibro} setLoading={setLoading} />
        </div>
    )
}
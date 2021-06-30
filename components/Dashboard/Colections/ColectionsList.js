import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { List, Image, Icon, Modal, Button, Header, Loader } from "semantic-ui-react";
import { size } from "lodash";
import { getColeccionesGuiaApi } from '../../../api/coleccion';
import CreateColectionModal from '../Modal/CreateColectionModal';
import DeleteModal from '../Modal/DeleteModal';
import { getOneGuia } from '../../../api/guia';
import { useRouter } from "next/router";

export default function ColectionsList(props) {

    const {idGuia, edit, setEdit, tipoRecurso, setListaColeccion} = props;
    const [colecciones, setColeciones] = useState([]);
    const [idLibro, setIdLibro] = useState(undefined);
    const [mensaje, setMensaje] = useState("");
    const [loading, setLoading] = useState(true);
    const [guia, setGuia] = useState([]);
    const openEdit = () => setEdit(true);
    const [showModal, setShowModalLibro] = React.useState(false);
    const openShowModalLibro = () => { setShowModalLibro(true)}

    const [showModalDelete, setShowModalLibroDelete] = React.useState(false);
    const [alejoNoJodas, setAlejoNoJodas] = useState(false);
    // const openShowModalLibroDelete = () => { }

    useEffect(() => {
        (async () => {
            // "60c5d66998d32c1d14b9a35e"
            const response = await getColeccionesGuiaApi(tipoRecurso,idGuia);
            const responseGuia = await getOneGuia(idGuia);
            setColeciones(response);
            setGuia(responseGuia);

            if(idGuia){
                setAlejoNoJodas(false);
                setTimeout(()=>{
                    setMensaje("No hay colecciones");
                }, 500)
            }else{
                setAlejoNoJodas(true);
            }
            setLoading(false);
            console.log("colecciones", colecciones);
            // return () => {setLoading(false);}
        })();
    }, [alejoNoJodas, loading]);


    return (
        <div className="colections padding-top-46">
            <div className="colections__header">
                <h3 className="colections__header__title">COLECCIONES</h3>
                <div className="colections__header__button" onClick={openShowModalLibro}><Icon name="add circle"/> <h3 className="colections__header__create">Crear Colección</h3></div>     
            </div>

            <div className="colections__content container-30 padding-top-46">
                {loading || idGuia === "" ?
                    <Loader active inline='centered' size='huge' />
                : null}
                {   colecciones && idGuia !== "" && size(colecciones) === 0 && !loading  ?  
                        mensaje
                    : null
                }
                { size(colecciones) > 0 && !loading &&
                    colecciones.map((coleccion, index) =>(
                        <div key={index} className="colections__content__element padding-bottom-25">
                            <div className="colections__content__element__box container-46">
                                <h3 className="m-0">{coleccion.nombre}</h3>
                                <div className="colections__content__element__box__button" onClick={ () => {setEdit(true), setListaColeccion(colecciones[index])}}>
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
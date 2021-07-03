import { toast } from 'react-toastify';
import {Modal, Icon, Header, Button, Loader} from 'semantic-ui-react'
import { deleteGuiaApi } from '../../../../api/guia';
import { deleteColeccionApi, getTodasColeccionesPorGuia } from '../../../../api/coleccion';
import { getTodosRecursosPorColeccion, deleteRecursoApi } from '../../../../api/recurso';
import React, { useState, useEffect } from 'react'

export default function DeleteModal(props){
    
    const {show, setShow, idDelete, setLoading, tipo} = props;

    const onClose = () => setShow(false);
    const [loadingDelete, setLoadingDelete] = useState(false);

    async function deleteGuia(id){
        setLoadingDelete(true);
        console.log(tipo);
        console.log(id);
        var recurso;
        switch(tipo){
            case 'guia':
                const colecciones = await getTodasColeccionesPorGuia(id)
                colecciones.map( async (coleccion, index) =>(
                    recurso = await getTodosRecursosPorColeccion(coleccion.id),
                    recurso.map( async (rec, index) =>(
                        await deleteRecursoApi(rec.id)    
                    ))
                )) 
                colecciones.map( async (coleccion, index) =>( 
                    await deleteColeccionApi(coleccion.id)
                ))
                await deleteGuiaApi(id);
                break;
            case 'recurso':
                const recursos = await getTodosRecursosPorColeccion(id);
                recursos.map( async (recurso,index) => (
                    await deleteRecursoApi(recurso.id)
                ))
                await deleteColeccionApi(id);
                break;
            default: break;
        }

        setLoading(true);
        setShow(false);
        setLoadingDelete(false);
        toast.success(`La guia se eliminó correctamente`);
    };

    return(
            <Modal 
                className="delete-colection-modal"
                // closeIcon
                open={show}
                size="small"
                >
                <Modal.Content>
                <div className="delete-colection-modal__content padding-top-46 padding-bottom-46">
                    <h2 className="m-0">¿Estás seguro de eliminar la Guía?</h2>
                    {
                        loadingDelete 
                        ?
                        <div className="delete-colection-modal__content__buttons padding-top-46">
                            <Loader active inline='centered' size='huge' className="loading-center" />
                        </div> 
                        : 
                        <div className="delete-colection-modal__content__buttons padding-top-46">
                            <Button onClick={ () => deleteGuia(idDelete)} >Sí, eliminar la Guía</Button>
                            <Button onClick={ () => onClose()}>Cancelar</Button>            
                        </div> 
                    }        
                </div>
                </Modal.Content>
            </Modal>
    )
}
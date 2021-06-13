import { toast } from 'react-toastify';
import {Modal, Icon, Header, Button, Loader} from 'semantic-ui-react'
import { deleteGuiaApi } from '../../../../api/guia';
import { deleteLibroApi } from '../../../../api/libro';
import React, { useState, useEffect } from 'react'

export default function DeleteModal(props){
    
    const {show, setShow, idDelete, setLoading, tipo} = props;

    const onClose = () => setShow(false);
    const [loadingDelete, setLoadingDelete] = useState(false);

    async function deleteGuia(id){
        setLoadingDelete(true);
        console.log(tipo);
        console.log(id);
        switch(tipo){
            case 'guia':
                await deleteGuiaApi(id);
                break;
            case 'libro':
                await deleteLibroApi(id);
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
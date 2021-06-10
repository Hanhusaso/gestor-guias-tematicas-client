import { toast } from 'react-toastify';
import {Modal, Icon, Header, Button, Loader} from 'semantic-ui-react'
import { deleteGuiaApi } from '../../../../api/guia';
import React, { useState, useEffect } from 'react'

export default function DeleteGuiaModal(props){
    
    const {show, setShow, idGuia, setLoadingColectionGuias} = props;

    const onClose = () => setShow(false);
    const [loadingDeleteGuias, setLoadingDeleteGuias] = useState(false);

    async function deleteGuia(id){
        setLoadingDeleteGuias(true);
        await deleteGuiaApi(id);   
        setLoadingColectionGuias(true);
        setShow(false);
        setLoadingDeleteGuias(false);
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
                        loadingDeleteGuias 
                        ?
                        <div className="delete-colection-modal__content__buttons padding-top-46">
                            <Loader active inline='centered' size='huge' className="loading-center" />
                        </div> 
                        : 
                        <div className="delete-colection-modal__content__buttons padding-top-46">
                            <Button onClick={ () => deleteGuia(idGuia)} >Sí, eliminar la Guía</Button>
                            <Button onClick={ () => onClose()}>Cancelar</Button>            
                        </div> 
                    }        
                </div>
                </Modal.Content>
            </Modal>
    )
}
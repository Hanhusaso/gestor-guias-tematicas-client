import {Modal, Icon, Header, Loader} from 'semantic-ui-react'
import { useFormik } from 'formik';
import { useRouter } from "next/router";
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import FormikControl from '../../../FormikControls/FormikControl';
import {createColectionLibroApi} from '../../../../api/libro';
import React, { useState, useEffect } from 'react'

export default function CreateColectionModal(props){
    
    const {show, setShow, tipoRecurso, guia, setLoading} = props;
    const [loadingCreate, setLoadingCreate] = useState(false);

    const onClose = () => setShow(false);

    const initialValues = {
        nombre: '',
    }

    const onSubmit = async (values) => {
        setLoadingCreate(true);
        console.log(values);
        const guiaSeleccionada = {
            recurso: tipoRecurso,
            guia: guia
        };

        const coleccionNueva = Object.assign(values,guiaSeleccionada);
        console.log(coleccionNueva);

        createColectionLibroApi(coleccionNueva);
        setLoading(true);
        setShow(false);
        setLoadingCreate(false);
    }

    const validationSchema = Yup.object({
        nombre: Yup.string().required('Requerido'),
    })

    return(
            <Modal 
                className="create-colection-modal"
                closeIcon
                open={show}
                // trigger={<Button>Show Modal</Button>}
                onClose={onClose}
                // onOpen={() => setOpen(true)}
                >
                {/* <Header /> */}
                <Modal.Content>
                    <Formik 
                        initialValues={initialValues} 
                        validationSchema={validationSchema} 
                        onSubmit={onSubmit}
                    >
                        {formik => (
                            <Form className="form">
                                <div className="modal__content__element">
                                    <div className="modal__content__element__box">
                                        <div className="modal__content__element__box__newcolection">
                                            <h3 className="m-0">Nueva colección</h3>
                                            <div className="modal__content__element__box__newcolection__box">
                                                <FormikControl
                                                    className='modal__content__element__box__newcolection__box__input'    
                                                    control='input'
                                                    label='Nombre de la colección:' 
                                                    name='nombre'
                                                />
                                                {
                                                    loadingCreate
                                                    ?
                                                    <Loader active inline='centered' size='huge' className="loading-center" />
                                                    :
                                                    <button type="submit" className="form__button">Crear</button>
                                                }
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Modal.Content>
            </Modal>
    )
}
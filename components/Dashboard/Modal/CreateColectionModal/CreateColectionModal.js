import {Modal, Icon, Header} from 'semantic-ui-react'
import { useFormik } from 'formik';
import { useRouter } from "next/router";
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import FormikControl from '../../../FormikControls/FormikControl';
import {createColectionLibroApi} from '../../../../api/libro';

export default function CreateColectionModal(props){
    
    const {show, setShow} = props;

    const onClose = () => setShow(false);

    const initialValues = {
        nombre: '',
    }

    const onSubmit = async (values) => {
        console.log(values);
        const guiaSeleccionada = {
            guia: parseInt(2)
        };

        const unidos = Object.assign(values,guiaSeleccionada);
        console.log(unidos);

        // createColectionLibroApi(unidos);
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
                                                    
                                                <button type="submit" className="form__button">Crear</button>
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
import React, { useState, useEffect } from 'react'
import { Menu, Loader } from 'semantic-ui-react'
import { useFormik } from 'formik';
import { useRouter } from "next/router";
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { createGuiasApi, getLastGuiaApi } from '../../../../api/guia';
import FormikControl from '../../../FormikControls/FormikControl';

import { Field, ErrorMessage } from 'formik'
import TextError from '../../../FormikControls/TextError';

function NuevaGuia(props) {
    const { auth } = props;
    const router = useRouter();
    const [loadingNewGuias, setLoadingNewGuias] = useState(false);

    const limpiarAcentos= (cadena) =>{
        cadena = cadena.toLowerCase();
     
        // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
        cadena = cadena.replace(/á/gi,"a");
        cadena = cadena.replace(/é/gi,"e");
        cadena = cadena.replace(/í/gi,"i");
        cadena = cadena.replace(/ó/gi,"o");
        cadena = cadena.replace(/ú/gi,"u");
        cadena = cadena.replace(/ñ/gi,"n");
        return cadena;
     }

    const initialValues = {
        clasificacion: '',
        nombre: '',
        descripcion: '',
        fecha: new Date(),
        estado: false,
        usuario: auth.idUser,
        url:''
    }

    const clasificaciones = [
        { key: '', value: '' },
        { key: 'Por escuela profesional', value: 'Por escuela profesional' },
        { key: 'Por personajes', value: 'Por personajes' },
        { key: 'Por temas', value: 'Por temas' },
        { key: 'Por colecciones especiales', value: 'Por colecciones especiales' },
        { key: 'Por recursos de apoyo a la investigación', value: 'Por recursos de apoyo a la investigación' }
    ]

    const onSubmit = async (values) => {
        setLoadingNewGuias(true);
        values.url = (((limpiarAcentos(values.nombre)).toLowerCase()).replace(/[^a-zA-Z0-9 ]/g, '')).replace(/ /g, '-');
        createGuiasApi(values);
        const ultimaGuia = await getLastGuiaApi();
        console.log(ultimaGuia[0].url);
        setLoadingNewGuias(false);
        router.replace(`/dashboard/guias/${ultimaGuia[0].url}`);
    }

    const validationSchema = Yup.object({
        clasificacion: Yup.string().required('Requerido'),
        nombre: Yup.string().required('Requerido'),
        descripcion: Yup.string().required('Requerido'),
        // email: Yup.string().email('Invalid email format').required('Required'),
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <div>
            <Menu className="container-46 padding-bottom-30 padding-top-46">
                    <h3 className="title">INGRESAR NUEVA GUÍA TEMÁTICA</h3>
            </Menu>

            <Formik 
                initialValues={initialValues} 
                validationSchema={validationSchema} 
                onSubmit={onSubmit}
            >
                {formik => (
                    <Form className="form">

                        {/* <FormikControl control='input' type='email' label='Correo' name='email'/> */}
                        <div className="container-46">
                            <div className="padding-top-46">
                                
                                <h3 className="m-0">Datos generales:</h3>
                                {/* <form onSubmit = {formik.handleSubmit} className="form"> */}
                                    <div className="padding-top-46">
                                        
                                            <FormikControl 
                                                control='select' 
                                                className='input-create'
                                                label='Clasificación de la guía:' 
                                                name='clasificacion'
                                                options={clasificaciones}
                                            />
                                        
                                    </div>
                                    <div className="padding-top-46">
                                        
                                            <FormikControl 
                                                className='input-create'
                                                control='input' 
                                                type='text' 
                                                label='Nombre de la guía temática:' 
                                                name='nombre'
                                            />
                                        
                                    </div>

                                    <div className="padding-top-46">
                                   
                                            <FormikControl 
                                                className='input-create'
                                                control='textarea' 
                                                label='Sobre esta guía temática:' 
                                                name='descripcion'
                                            />
                                        
                                    </div>
                                    <div className="d-center padding-top-46">
                                        {/* <Link href={`/dashboard/guias/${guia.id}`}> */}
                                        {
                                            loadingNewGuias ? 
                                            <Loader active inline='centered' size='huge' /> :
                                            <button type="submit" className="form__button">Continuar</button>
                                        }

                                        {/* </Link> */}
                                    </div>  
                                {/* </form> */}
                            </div>
                        </div>

                    </Form>
                )}
            </Formik>
            
        </div>

    //     <form onSubmit = {formik.handleSubmit}>
    //     <label htmlFor='nombre'>Nombre</label>
    //     <input type='text' id='nombre' name="nombre" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nombre} />   
    //     {formik.errors.nombre ? ( 
    //     <div>{formik.errors.nombre}</div> ) : null}

    //     <button>Enviar</button>             
    // </form>
    )
}

export default NuevaGuia



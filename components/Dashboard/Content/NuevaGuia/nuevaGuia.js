import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { useFormik } from 'formik';
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { createGuiasApi } from '../../../../api/guia';
import FormikControl from '../../../FormikControls/FormikControl';

import { Field, ErrorMessage } from 'formik'
import TextError from '../../../FormikControls/TextError';

function NuevaGuia(props) {
    const { auth } = props;
    const initialValues = {
        clasificacion: '',
        nombre: '',
        descripcion: '',
        fecha: new Date(),
        estado: false,
        usuario: auth.idUser
    }

    const clasificaciones = [
        { key: '', value: '' },
        { key: 'Por escuela profesional', value: 'Por escuela profesional' },
        { key: 'Por personajes', value: 'Por personajes' },
        { key: 'Por temas', value: 'Por temas' },
        { key: 'Por colecciones especiales', value: 'Por colecciones especiales' },
        { key: 'Por recursos de apoyo a la investigación', value: 'Por recursos de apoyo a la investigación' }
    ]

    const onSubmit = values => {
        console.log('Form data', values)
        console.log(values.usuario);
        // values.usuario = user
        createGuiasApi(values);
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
                                        {/* <label className="input-create__label">
                                            <h4>Clasificación de la guía:</h4>
                                        </label>
                                        <div className="input-create__input"> */}
                                            {/* <input className="input-create__input__into" type='text' id='clasificacion' name="clasificacion" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.clasificacion} />   
                                            {formik.errors.clasificacion ? ( 
                                            <div>{formik.errors.clasificacion}</div> ) : null} */}
                                            <FormikControl 
                                                control='select' 
                                                className='input-create'
                                                label='Clasificación de la guía:' 
                                                name='clasificacion'
                                                options={clasificaciones}
                                            />
                                            {/*  */}
                                        {/* </div> */}
                                        
                                    </div>
                                    <div className="padding-top-46">
                                        {/* className="input-create" */}
                                        {/* <label className="input-create__label">
                                            <h4>Nombre de la guía temática:</h4>
                                        </label>
                                        <div className="input-create__input"> */}
                                            {/* <input className="input-create__input__into" type='text' id='nombre' name="nombre" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nombre} />   
                                            {formik.errors.nombre ? ( 
                                            <div>{formik.errors.nombre}</div> ) : null} */}
                                            <FormikControl 
                                                className='input-create'
                                                control='input' 
                                                type='text' 
                                                label='Nombre de la guía temática:' 
                                                name='nombre'
                                            />
                                        {/* </div> */}
                                        
                                    </div>

                                    <div className="padding-top-46">
                                    {/* className="input-create" */}
                                        {/* <label className="input-create__label">
                                            <h4>descripcion esta guía temática:</h4>
                                        </label>
                                        <div className="input-create__input"> */}
                                            {/* <input className="input-create__input__into" type='text' id='descripcion' name="descripcion" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.descripcion} />   
                                            {formik.errors.descripcion ? ( 
                                            <div>{formik.errors.descripcion}</div> ) : null} */}
                                            <FormikControl 
                                                className='input-create'
                                                control='textarea' 
                                                label='Sobre esta guía temática:' 
                                                name='descripcion'
                                            />
                                        {/* </div> */}
                                        
                                    </div>
                                    <div className="d-center padding-top-46">
                                        <button type="submit" className="form__button">Continuar</button>
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



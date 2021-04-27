import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function NuevaGuia() {
    const initialValues = {
        clasificacion: '',
        nombre: '',
        sobre: ''
    }

    const onSubmit = values => {
        console.log('Form data', values)
    }

    const validate = values => {
        // let errors = {}
        // if(!values.clasificacion){
        //     errors.clasificacion = 'Required'
        // }

        // return errors 
    }

    const validationSchema = Yup.object({
        clasificacion: Yup.string().required('Requerido'),
        nombre: Yup.string().required('Requerido'),
        sobre: Yup.string().required('Requerido'),
        // email: Yup.string().email('Invalid email format').required('Required'),

    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
        validationSchema
    })

    return (
        <div>
            <Menu>
                    <h3 className="title">INGRESAR NUEVA GUÍA TEMÁTICA</h3>
            </Menu>
            <div className="dashboard__content__padding">
                <div className="dashboard__content__padding__extra">
                    <h3>Datos generales:</h3>
                    <form onSubmit = {formik.handleSubmit} className="form">
                        <div className="input-main">
                            <label className="input-main__label">
                                <h4>Clasificación de la guía:</h4>
                            </label>
                            <div className="input-main__input">
                                <input className="input-main__input__into" type='text' id='clasificacion' name="clasificacion" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.clasificacion} />   
                                {formik.errors.clasificacion ? ( 
                                <div>{formik.errors.clasificacion}</div> ) : null}
                                {/* <FormikControl
                                            control='input'
                                            name='telefono'
                                        /> */}
                            </div>
                            
                        </div>
                        <div className="input-main">
                            <label className="input-main__label">
                                <h4>Nombre de la guía temática:</h4>
                            </label>
                            <div className="input-main__input">
                                <input className="input-main__input__into" type='text' id='nombre' name="nombre" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nombre} />   
                                {formik.errors.nombre ? ( 
                                <div>{formik.errors.nombre}</div> ) : null}
                                {/* <FormikControl
                                            control='input'
                                            name='telefono'
                                        /> */}
                            </div>
                            
                        </div>

                        <div className="input-main">
                            <label className="input-main__label">
                                <h4>Sobre esta guía temática:</h4>
                            </label>
                            <div className="input-main__input">
                                <input className="input-main__input__into" type='text' id='sobre' name="sobre" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.sobre} />   
                                {formik.errors.sobre ? ( 
                                <div>{formik.errors.sobre}</div> ) : null}
                                {/* <FormikControl
                                            control='input'
                                            name='telefono'
                                        /> */}
                            </div>
                            
                        </div>
                        <div className="d-center">
                            <button className="form__button">Continuar</button>
                        </div>  
                    </form>
                </div>
            </div>
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
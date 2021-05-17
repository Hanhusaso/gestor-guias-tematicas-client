import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { useFormik } from 'formik';
import { Formik, Form, FieldArray, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { List, Image, Icon, Modal, Button, Header } from "semantic-ui-react";
import FormikControl from '../../../FormikControls/FormikControl';
import TextError from '../../../FormikControls/TextError'

export default function ColeccionLibros(props) {

    const {edit, setEdit} = props;
    const closeEdit = () => setEdit(false);

    // const [recursos, setRecursos] = useState([
    //     {titulo: '', enlace: ''}
    // ]);

    const initialValues = {
        nombre: '',
        descripcion: '',
        
        recurso: [{
            titulo: '',
            enlace: '',
            autor: '',
            descargar: false,
            tipo: '',
            fecha: null,
        }],
        
        
        // tipo: '',
    }

    const tipos = [
        { key: '', value: '' },
        { key: 'Recursos electrónicos', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' }
    ]


    const onSubmit = (values) => {
        console.log('Form data', values)
        // console.log("purbea")
    }

    const validationSchema = Yup.object({
        nombre: Yup.string().required('Requerido'),
        descripcion: Yup.string().required('Requerido'),
        recurso: Yup.array()
        .of(Yup.object({
            titulo: Yup.string().required('Requerido'),
            // enlace: Yup.string().required('Requerido'),
            autor: Yup.string().required('Requerido'),
            fecha: Yup.date().required('Requerido').nullable(),
            tipo: Yup.string().required('Requerido')
        })),
        
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })


    return (
        <div className="colections padding-top-46 container-30">
            {/* <button>Regresar</button> */}
            <div className="d-flex">
                <Icon name="angle left pointer" size='large' onClick={closeEdit} />
                <h3 className="m-0">Fondo Editorial</h3>
            </div>

            <Formik 
                initialValues={initialValues} 
                validationSchema={validationSchema} 
                onSubmit={onSubmit}
            >
                {formik => (

                    <Form className="form padding-top-30">
                        <div className="form-edit container-61 padding-top-46 padding-bottom-46">
                            <div className="padding-bottom-20">
                                
                                <FormikControl 
                                    control='input' 
                                    className='input-edit'
                                    label='Nombre de la colección:' 
                                    name='nombre'
                                />

                            </div>

                            <div className="padding-bottom-30">

                                <FormikControl 
                                    className='input-edit'
                                    control='textarea' 
                                    label='Descripción:' 
                                    name='descripcion'
                                />

                            </div>                        
                                
                                <FieldArray name='recurso'>
                                {fieldArrayProps => {
                                    // console.log('fieldArray', fieldArrayProps)
                                    const {push, remove, form} = fieldArrayProps
                                    const {values} = form
                                    const {recurso} = values
                                    return (
                                        <div >
                                        {
                                            recurso.map((rec, index) => (
                                                <div key={index}>
                                                    <div className="line"></div>
                                                    <div className="margin-top-30 resource">
                                                        <div className="resource__titleBox margin-bottom-30">
                                                            <h4 className="m-0">Recurso {index+1}</h4>
                                                            
                                                            <Icon name="trash alternate outline pointer" size='large' onClick={() => remove(index)} />
                                                        </div>

                                                        <div className="margin-bottom-20">
                                                            
                                                            <FormikControl 
                                                                control='input' 
                                                                className='input-edit'
                                                                label='Título:' 
                                                                name={`recurso[${index}].titulo`}
                                                            />
                                                        </div>

                                                        <div className="margin-bottom-20">
                                                            <FormikControl 
                                                                control='input' 
                                                                className='input-edit'
                                                                label='Enlace del recurso:' 
                                                                name={`recurso[${index}].enlace`}
                                                            />
                                                        </div>
                                                        
                                                        <div className="margin-bottom-20">
                                                            <label className="d-inline-flex label-auto" style={{marginLeft: '200px'}}>
                                                                <Field type="checkbox" name={`recurso[${index}].descargar`} />
                                                                <p className="m-0">Disponible para descargar</p>
                                                            </label>
                                                        </div>

                                                        <div className="margin-bottom-20">
                                                            <FormikControl 
                                                                control='input' 
                                                                className='input-edit'
                                                                label='Autor:' 
                                                                name={`recurso[${index}].autor`}
                                                            />
                                                            
                                                        </div>

                                                        <div className="d-flex justify-between">
                                                            <div className="margin-bottom-30">
                                                                <FormikControl 
                                                                    control='date' 
                                                                    className='input-edit input-auto'
                                                                    label='Fecha de publicación:' 
                                                                    name={`recurso[${index}].fecha`}
                                                                />
                                                                
                                                            </div>

                                                            <div>
                                                                <FormikControl 
                                                                    control='select'
                                                                    className='input-edit label-auto'
                                                                    label='Tipo:' 
                                                                    name={`recurso[${index}].tipo`}
                                                                    options={tipos}
                                                                />
                                                            </div>
                                                        </div>
                                                    
                                                        { (index+1) == recurso.length ? (
                                                            <div className="resource__add margin-bottom-30">
                                                                <Icon name="add circle" size='large' onClick={() => push('')} />
                                                                <h4 className="m-0" onClick={() => push('')}>Agregar recurso</h4>
                                                            </div>
                                                        ): null}
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        </div>
                                    )
                                }}
                                </FieldArray>
                            

                            {/* <Button onClick={(e) => agregar(e)}>Agregar</Button> */}
                            {/* <Button onClick={(e) => enviar(e)}>Enviar</Button> */}
                            {/* <Button onClick={onSubmit}>Enviar</Button> */}
                            <button type="submit">Continuar</button>
                        </div>
                    </Form>
                )}
            </Formik>
            
        </div>
    )
}
import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { useFormik } from 'formik';
import { Formik, Form, FieldArray, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { List, Image, Icon, Modal, Button, Header } from "semantic-ui-react";
import FormikControl from '../../../FormikControls/FormikControl';
import TextError from '../../../FormikControls/TextError'
import { updateColeccionesApi } from '../../../../api/coleccion';
import { createRecursosApi, getRecursosApi } from '../../../../api/recurso';
import { create } from 'lodash';

export default function EditLibros(props) {

    const {edit, setEdit, listaGuia, listaColeccion, setListaColeccion} = props;
    const closeEdit = () => setEdit(false);
    const [loading, setLoading] = useState(true);
    const [listaRecursos, setListaRecursos] = useState(undefined);

    useEffect(() => {
        (async () => {
          const response = await getRecursosApi();
          setListaRecursos(response);
          if(listaRecursos){
            console.log("lista recursos",listaRecursos);
            console.log(listaRecursos[0].titulo);
          }
        })();
        setLoading(false);
    }, [loading]);
    
    const initialValues = {
        nombre: listaColeccion.nombre,
        descripcion: listaColeccion.descripcion,
        
        recurso: [{
            titulo: '',
            enlace: '',
            autor: '',
            descargar: false,
            tipo: '',
            fecha: null,
        }],
        
    }

    const tipos = [
        { key: '', value: '' },
        { key: 'Recursos electrónicos', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' }
    ]


    const onSubmit = async (values) => {
        // console.log('Form data', values)
        // console.log("lista guia", listaGuia);
        // console.log("lista coleccion", listaColeccion);
        // console.log(listaColeccion._id);
        const actualizaColeccion = {
            nombre: values.nombre,
            descripcion: values.descripcion
        }

        await updateColeccionesApi(listaColeccion._id, actualizaColeccion);
        const creaRecursos = values;
        delete creaRecursos.nombre;
        delete creaRecursos.descripcion;
        

        creaRecursos.recurso.map( async (recurso, index)=>{
            creaRecursos.recurso[index].coleccion = listaColeccion;
            delete creaRecursos.recurso[index].coleccion.guia;
            creaRecursos.recurso[index].coleccion.guia = listaGuia[0].id;
            await createRecursosApi(creaRecursos.recurso[index]);
        })

        setEdit(false);
        // console.log(prueba);
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
                <h3 className="m-0">{listaColeccion.nombre}</h3>
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
                                                                    className='input-edit'
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
import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Guia() {

    // state = { activeItem: 'home' }

    
    // const { activeItem } = this.state
    
    // const [activeItem, setActiveItem] = useState('MIS GUIAS TEMÁTICAS');

    // const handleItemClick = (e, { name }) => setActiveItem(name)

    const initialValues = {
        nombre: '',
    }

    const onSubmit = values => {
        console.log('Form data', values)
    }

    const validate = values => {
        // let errors = {}
        // if(!values.nombre){
        //     errors.nombre = 'Required'
        // }

        // return errors 
    }

    const validationSchema = Yup.object({
        nombre: Yup.string().required('Requerido'),
        email: Yup.string().email('Invalid email format').required('Required'),

    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
        validationSchema
    })

    // console.log('Form values', formik.values);
    return (
        <div>
            <div className="dashboard__content">
                <h3>INGRESAR UNA GUÍA TEMÁTICA</h3>
                <h4>DATOS GENERALES</h4>

                {/* <div className="nombre">
                        <label className="nombre__label">
                            <h4>Nombre de la formación: <span>*</span></h4>
                        </label> 
                </div> */}

                <form onSubmit = {formik.handleSubmit}>
                    <label htmlFor='nombre'>Nombre</label>
                    <input type='text' id='nombre' name="nombre" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nombre} />   
                    {formik.errors.nombre ? ( 
                    <div>{formik.errors.nombre}</div> ) : null}

                    <button>Enviar</button>             
                </form>

                
            </div>

            
            
        </div>
    )
}

export default Guia

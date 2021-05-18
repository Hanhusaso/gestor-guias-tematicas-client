import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError';


function Input(props) {

    const {label, name, className, ...rest} = props

    return (
        <div className={className}>
            <label htmlFor={name}>{label}</label>
            <div className="w-calc">
                <Field id={name} name={name} {...rest}/>
                <ErrorMessage name={name} component={TextError}/>
            </div>
        </div>
    )
}

export default Input

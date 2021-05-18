import React from 'react'
import {Field, ErrorMessage} from 'formik'
import TextError from './TextError'

function Select(props) {
    const {label, name, options, className,...rest} = props

    return (
        <div className={className}>
            <label htmlFor={name}>{label}</label>
            <div className="w-calc">
                <Field as='select' id={name} name={name} {...rest}>
                    {
                        options.map(option => {
                            return(
                                <option key={option.value} value={option.value}>
                                    {option.key}
                                </option>
                            )
                        })
                    }
                </Field>
                <ErrorMessage name={name} component={TextError}/>
            </div>
        </div>
    )
}

export default Select

import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import ColeccionOtrosSitios from './ColeccionOtrosSitios'
import EditarColeccionOtrosSitios from './EditColeccionOtrosSitios';

export default function OtrosSitios() {
    const [showEditOtrosSitios, setShowEditOtrosSitios] = React.useState(false);
    const openShowEditOtrosSitios = () => { setShowEditOtrosSitios(true)}

    return (
        <div>
            {showEditOtrosSitios == false ? (
                <ColeccionOtrosSitios edit = {showEditOtrosSitios} setEdit = {setShowEditOtrosSitios} />
            ): null}
            
            {showEditOtrosSitios == true ? (
                <EditarColeccionOtrosSitios edit = {showEditOtrosSitios} setEdit = {setShowEditOtrosSitios} />
            ): null}
        </div>
    )
}
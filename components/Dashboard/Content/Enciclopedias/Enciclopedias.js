import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import ColeccionEnciclopedias from './ColeccionEnciclopedias';
import EditarColeccionEnciclopedias from './EditarColeccionEnciclopedias';


export default function Enciclopedias() {
    const [showEditEnciclopedias, setShowEditEnciclopedias] = React.useState(false);
    const openShowEditEnciclopedias = () => { setShowEditEnciclopedias(true)}

    return (
        <div>
            {showEditEnciclopedias == false ? (
                <ColeccionEnciclopedias edit = {showEditEnciclopedias} setEdit = {setShowEditEnciclopedias} />
            ): null}
            
            {showEditEnciclopedias == true ? (
                <EditarColeccionEnciclopedias edit = {showEditEnciclopedias} setEdit = {setShowEditEnciclopedias} />
            ): null}
        </div>
    )
}
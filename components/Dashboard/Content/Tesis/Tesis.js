import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import ColeccionTesis from './ColeccionTesis';
import EditarColeccionTesis from './EditarColeccionTesis';

export default function Tesis() {
    const [showEditTesis, setShowEditTesis] = React.useState(false);
    const openShowEditTesis = () => { setShowEditTesis(true)}

    return (
        <div>
            {showEditTesis == false ? (
                <ColeccionTesis edit = {showEditTesis} setEdit = {setShowEditTesis} />
            ): null}
            
            {showEditTesis == true ? (
                <EditarColeccionTesis edit = {showEditTesis} setEdit = {setShowEditTesis} />
            ): null}
        </div>
    )
}